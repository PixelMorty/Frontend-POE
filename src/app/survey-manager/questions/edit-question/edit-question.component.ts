import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionType } from 'src/app/core/models/enums-model/question-type';
import { Choice } from 'src/app/core/models/survey-models/choice.model';
import { Question } from 'src/app/core/models/survey-models/question.model';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss'],
})
export class EditQuestionComponent implements OnInit {
  public QuestionType = QuestionType;
  public question!: Question;
  public choices!: Choice[];

  @Input() set inputQuestion(question: Question) {
    this.question = question;
  }
  @Output() inputQuestionChange = new EventEmitter<Question>();

  questionForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  addChoice(): void {}

  removeChoice(): void {}

  shouldShowTitleRequiredError() {
    const title = this.questionForm.controls['title'];

    return title.touched && title.hasError('required');
  }
}
