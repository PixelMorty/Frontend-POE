import { Component, Input, OnInit } from '@angular/core';
import { Choice } from 'src/app/core/models/survey-models/choice.model';

@Component({
  selector: 'app-multiple-choices',
  templateUrl: './multiple-choices.component.html',
  styleUrls: ['./multiple-choices.component.scss'],
})
export class MultipleChoicesComponent implements OnInit {
  @Input() choices: Choice[] = [];

  constructor() {}

  ngOnInit(): void {}
}
