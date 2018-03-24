import { Component, OnInit, EventEmitter, Output, Input, Inject } from '@angular/core'
import { Validators, FormBuilder, FormArray, FormGroup } from '@angular/forms'
import { QaPairsService } from 'app/qa-pairs/qa-pairs.service'
import { DOCUMENT } from '@angular/platform-browser'

@Component({
  selector: 'app-qa-pair-editor',
  templateUrl: './qa-pair-editor.component.html',
  styleUrls: ['./qa-pair-editor.component.scss']
})
export class QaPairEditorComponent implements OnInit {
  public qaForm: FormGroup
  public isNew: boolean = true
  public curScrollTop = this.document.body.scrollTop

  @Output() toggleQAModal: EventEmitter<string> = new EventEmitter<string>()
  @Input () currentQapair

  constructor (
    private fb: FormBuilder,
    private qaService: QaPairsService,
    @Inject(DOCUMENT) private document: any) {

    this.qaForm = this.fb.group({
      question: ['', Validators.required],
      correctAnswers: this.fb.array([this.fb.control('', Validators.required)]),
      explanation: '',
      wrongAnswers: this.fb.array([])
    })
  }

  ngOnInit () {
    this.isNew = !this.currentQapair
    this.initForm()
  }

  doNewQA () {
    this.qaService.newQAPair(this.qaForm.value)

    this.toggleQAModal.emit('toggleQAModal')
    this.qaForm.reset()
  }

  updateQA () {
    this.qaService.updateQAPair(this.currentQapair._id, this.qaForm.value)
    this.toggleQAModal.emit('toggleQAModal')
    this.qaForm.reset()
  }

  setAnswers (answers: string[], rightORwrongAns: 'correctAnswers' | 'wrongAnswers') {
    const answerFormControls = answers.map(answer => this.fb.control(answer, Validators.required))
    const answerFormArray = this.fb.array(answerFormControls)
    this.qaForm.setControl(rightORwrongAns, answerFormArray)
  }

  addAnswer (rightORwrongAns: 'correctAnswers' | 'wrongAnswers') {
    this[rightORwrongAns].push(this.fb.control('', Validators.required))
  }

  removeAnswer (index, rightORwrongAns: 'correctAnswers' | 'wrongAnswers') {
    this[rightORwrongAns].removeAt(index)
  }

  get correctAnswers (): FormArray {
    return this.qaForm.get('correctAnswers')
  }

  get wrongAnswers (): FormArray {
    return this.qaForm.get('wrongAnswers')
  }

  get body () {
    return this.document.body
  }

  toggleNewQAModal () {
    this.toggleQAModal.emit()
  }

  private initForm () {
    if (!this.isNew) {
      this.setAnswers(this.currentQapair.correctAnswers, 'correctAnswers')
      this.setAnswers(this.currentQapair.wrongAnswers, 'wrongAnswers')
      this.qaForm.setControl('question', this.fb.control(this.currentQapair.question))
      this.qaForm.setControl('explanation', this.fb.control(this.currentQapair.explanation))
    }
  }
}
