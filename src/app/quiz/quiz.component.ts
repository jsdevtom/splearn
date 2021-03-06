import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { QaPairsService } from "app/qa-pairs/qa-pairs.service";
import { FormBuilder, Validators } from "@angular/forms";
import { filterToBeAssessed } from "app/helpers";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnDestroy, OnInit {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  private questionIndex = 0
  private answeredQuestions = 0
  private correctAnswerCount = 0
  private currentQAPair
  private numOfQuestionsInQuiz = 10
  private quizQuestions = []
  private showFeedbackScreen: boolean = false
  private resultMessage: string
  private percentageCorrect: string
  public QAForm = this.fb.group({
    answer: ["", Validators.required]
  })

  constructor(private qaService: QaPairsService, public fb: FormBuilder) { }

  ngOnInit() {
    this.qaService.getQAPairs()
      .takeUntil(this.ngUnsubscribe)
      .subscribe((qapairs) => {
        this.quizQuestions = filterToBeAssessed(qapairs).slice(0, this.numOfQuestionsInQuiz)
        if (this.quizQuestions.length < this.numOfQuestionsInQuiz) {
          this.numOfQuestionsInQuiz = this.quizQuestions.length
        }
        this.questionIndex = 0
        this.correctAnswerCount = 0
        this.answeredQuestions = 0
        this.showFeedbackScreen = false
        this.currentQAPair = this.quizQuestions.shift()
      })
  }

  onSubmitAnswer() {
    this.qaService.isCorrectAnswer(this.currentQAPair._id, this.QAForm.value.answer)
      .subscribe((data) => {
        this.showFeedbackScreen = true
        this.answeredQuestions++
        if (data.isCorrect === true) {
          this.resultMessage = `You're correct!`
          this.correctAnswerCount++
        } else {
          this.resultMessage = `Not quite!`
        }
        this.percentageCorrect = ((this.correctAnswerCount / this.answeredQuestions) * 100).toFixed()
        
      })
    this.QAForm.reset()
  }

  hideFeedbackScreen() {
    this.showFeedbackScreen = false
    this.questionIndex++
    if (!this.isFinished) {
      this.currentQAPair = this.quizQuestions.shift()
    }
  }

  resetQuiz() {
    this.ngOnInit()
  }

  get isFinished (): Boolean {
    return !(this.answeredQuestions < this.numOfQuestionsInQuiz) && !this.showFeedbackScreen
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
