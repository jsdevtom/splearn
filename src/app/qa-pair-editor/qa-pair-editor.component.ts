import { Component, OnInit, EventEmitter, Output, Input, Inject, AfterViewInit } from '@angular/core';
import { Validators, FormBuilder, FormArray, FormControl, FormGroup } from "@angular/forms";
import { QaPairsService } from "app/qa-pairs/qa-pairs.service";

@Component({
  selector: 'app-qa-pair-editor',
  templateUrl: './qa-pair-editor.component.html',
  styleUrls: ['./qa-pair-editor.component.scss']
})
export class QaPairEditorComponent implements OnInit, AfterViewInit {
  public qaForm: FormGroup
  private isNew: boolean = true
  private curScrollTop = document.body.scrollTop

  @Output() toggleQAModal: EventEmitter<string> = new EventEmitter<string>()
  @Input () currentQapair

  constructor(
    private fb: FormBuilder,
    private qaService: QaPairsService) {

    this.qaForm = this.fb.group({
      question: ['', Validators.required],
      correctAnswers: this.fb.array([this.fb.control('', Validators.required)]),
      explanation: '',
      wrongAnswers: this.fb.array([])
    })
  }

  ngOnInit() {
    this.isNew = !this.currentQapair
    this.initForm()
  }

  ngAfterViewInit() {
    this.autoResizeAll(document.querySelectorAll('textarea'))
  }

  private initForm () {
    if (!this.isNew) {
      this.setAnswers(this.currentQapair.correctAnswers, 'correctAnswers')
      this.setAnswers(this.currentQapair.wrongAnswers, 'wrongAnswers')
      this.qaForm.setControl('question', this.fb.control(this.currentQapair.question))
      this.qaForm.setControl('explanation', this.fb.control(this.currentQapair.explanation))
    }
  }

  doNewQA(event) {
    console.log(event)
    console.log(this.qaForm.value)
    this.qaService.newQAPair(this.qaForm.value)
      
    this.toggleQAModal.emit('toggleQAModal')
    this.qaForm.reset()
  }

  updateQA(event) {
    this.qaService.updateQAPair(this.currentQapair._id, this.qaForm.value)
    this.toggleQAModal.emit('toggleQAModal')
    this.qaForm.reset()
  }

  setAnswers(answers: string[], rightORwrongAns: 'correctAnswers' | 'wrongAnswers') {
    const answerFormControls = answers.map(answer => this.fb.control(answer, Validators.required))
    const answerFormArray = this.fb.array(answerFormControls)
    this.qaForm.setControl(rightORwrongAns, answerFormArray)
  }

  addAnswer(rightORwrongAns: 'correctAnswers' | 'wrongAnswers') {
    this[rightORwrongAns].push(this.fb.control('', Validators.required))
  }

  removeAnswer(index, rightORwrongAns: 'correctAnswers' | 'wrongAnswers') {
    this[rightORwrongAns].removeAt(index)
  }

  get correctAnswers(): FormArray {
    return this.qaForm.get('correctAnswers') as FormArray
  }

  get wrongAnswers(): FormArray {
    return this.qaForm.get('wrongAnswers') as FormArray
  }

  autoResize(event: KeyboardEvent) {
    (<HTMLInputElement>event.target).style.height = 'auto';
    (<HTMLInputElement>event.target).style.height = ((<HTMLInputElement>event.target).scrollHeight) + 'px'
  }

  autoResizeAll(inputs: NodeListOf<HTMLTextAreaElement>) {
    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i]
      input.style.height = 'auto'
      input.style.height = input.scrollHeight + 'px'
    }
  }

  get body () {
    return document.body
  }

  toggleNewQAModal() {
    this.toggleQAModal.emit()
  }
}
