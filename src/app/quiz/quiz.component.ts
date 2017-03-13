import { Component, OnInit } from '@angular/core';
import { QaPairsService } from "app/qa-pairs/qa-pairs.service";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  private questionIndex = 0
  private correctAnswerCount = 0
  private currentQAPair
  private currentQuestion
  private numOfQuestionsInQuiz = 10
  public QAForm = this.fb.group({
    answer: ["", Validators.required]
  })

  constructor(private qaService: QaPairsService, public fb: FormBuilder) { }

  ngOnInit() {
    this.qaService.getNthQuestion(0)
      .subscribe((data) => {
        this.questionIndex = 0
        this.correctAnswerCount = 0
        this.currentQAPair = data
        this.currentQuestion = data.question    
      })
    this.qaService.getQAPairs()
      .subscribe((qapairs) => {
        if (qapairs.length < this.numOfQuestionsInQuiz) {
          this.numOfQuestionsInQuiz = qapairs.length
        }
      }) 
  }

  onSubmitAnswer() {
    this.qaService.isCorrectAnswer(this.currentQAPair._id, this.QAForm.value.answer)
      .subscribe((data) => {
        if (data.isTrue === true) {
          console.log(`You're correct!`)
          this.correctAnswerCount++
        } else {
          console.log(`Try again!`)
        }
        this.questionIndex++
        if (!this.isFinished) {
          this.qaService.getNthQuestion(this.questionIndex)
            .subscribe((data) => {
              this.currentQAPair = data
              this.currentQuestion = data.question
            })
        } else {
        }
      })
    this.QAForm.reset()
  }

  resetQuiz() {
    this.ngOnInit()
  }

  get isFinished (): Boolean {
    return !(this.questionIndex < this.numOfQuestionsInQuiz)
  }

}
