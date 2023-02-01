import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionType } from 'src/app/core/models/enums-model/question-type';
import { Question } from 'src/app/core/models/survey-models/question.model';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss'],
})
export class EditQuestionComponent implements OnInit {
  public QuestionType = QuestionType;
  public question!: Question;

  @Input() set inputQuestion(question: Question) {
    this.question = question;
  }
  @Output() inputQuestionChange = new EventEmitter<Question>();

  questionForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  shouldShowTitleRequiredError() {
    const title = this.questionForm.controls['title'];

    return title.touched && title.hasError('required');
  }
}
