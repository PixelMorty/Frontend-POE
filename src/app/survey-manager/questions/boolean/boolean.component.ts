import { Component, OnInit, Input } from '@angular/core';
import { Choice } from 'src/app/core/models/survey-models/choice.model';

@Component({
  selector: 'app-boolean',
  templateUrl: './boolean.component.html',
  styleUrls: ['./boolean.component.scss'],
})
export class BooleanComponent implements OnInit {
  @Input() choices: Choice[] = [];

  constructor() {}

  ngOnInit(): void {}
}
