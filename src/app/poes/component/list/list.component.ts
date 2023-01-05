import { Component, OnInit } from '@angular/core';
import { Poe } from 'src/app/core/models/poe';
import { PoeService } from '../../services/poe/poe.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
onDelete(_t24: Poe) {
throw new Error('Method not implemented.');
}
getDisplayRowsNumber() {
throw new Error('Method not implemented.');
}
  poes: Poe[] = [];
  public showLi: string = 'A';
  constructor(private _poeService: PoeService) {}

  ngOnInit(): void {
    this._poeService.findAll().subscribe((poes: Poe[]) => {
      this.poes = poes;
    });
  }
}
