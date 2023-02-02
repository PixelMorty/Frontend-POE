import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Choice } from 'src/app/core/models/survey-models/choice.model';

@Component({
  selector: 'app-multiple-choices',
  templateUrl: './multiple-choices.component.html',
  styleUrls: ['./multiple-choices.component.scss'],
})
export class MultipleChoicesComponent implements OnInit, OnChanges {
  @Input() choices: Choice[] = [];
  // @Output() choicesChange = new EventEmitter<Choice[]>();

  multipleChoicesForm = new FormGroup({
    choiceName: new FormControl(null, [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {}

  addChoice(): void {
    this.choices.push(new Choice());
  }

  removeChoice(): void {
    this.choices.pop();
  }

  shouldShowChoiceNameRequiredError() {
    const choiceName = this.multipleChoicesForm.controls['choiceName'];

    return choiceName.touched && choiceName.hasError('required');
  }
}
