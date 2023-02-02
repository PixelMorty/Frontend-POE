import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Choice } from 'src/app/core/models/survey-models/choice.model';
import { ChoiceService } from 'src/app/core/services/choice-service';

@Component({
  selector: 'app-multiple-choices',
  templateUrl: './multiple-choices.component.html',
  styleUrls: ['./multiple-choices.component.scss'],
})
export class MultipleChoicesComponent implements OnInit {
  @Input() choices: Choice[] = [];
  @Output() choicesChange = new EventEmitter<Choice[]>();

  multipleChoicesForm = new FormGroup({
    choiceName: new FormControl(null, [Validators.required]),
  });

  public choice!: Choice;

  modalRef: BsModalRef | undefined;
  message: string | undefined;

  constructor(private choiceService: ChoiceService) {}

  ngOnInit(): void {}

  addChoice(): void {}

  removeChoice(choice: Choice): void {
    this.choiceService.delete(choice);
  }

  shouldShowChoiceNameRequiredError() {
    const choiceName = this.multipleChoicesForm.controls['choiceName'];

    return choiceName.touched && choiceName.hasError('required');
  }
}
