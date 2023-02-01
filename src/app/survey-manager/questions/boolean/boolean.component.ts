import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Choice } from 'src/app/core/models/survey-models/choice.model';

@Component({
  selector: 'app-boolean',
  templateUrl: './boolean.component.html',
  styleUrls: ['./boolean.component.scss'],
})
export class BooleanComponent implements OnInit {
  @Input() choices: Choice[] = [];
  @Output() choicesOutput = new EventEmitter<Choice[]>();

  constructor() {}

  ngOnInit(): void {}

  updateChoices(choices: Choice[]) {
    this.choicesOutput.emit(choices);
  }
}
