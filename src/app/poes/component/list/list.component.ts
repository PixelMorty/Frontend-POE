import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  constructor(private _poeService: PoeService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this._poeService.findAll().subscribe((poes: Poe[]) => {
      this.poes = poes;
    });
  }

  public getDisplayRowsNumber(): number {
    if (this.showLi === 'All') {
      return this.poes.length;
    }
    let displayedItem: number = 0;
    for (const poe of this.poes) {
      if (poe.poeType === this.showLi) {
        displayedItem += 1;
      }
    }
    return displayedItem;
  }

  public onDelete(poe: Poe): void {
    this._poeService.delete(poe).subscribe((response: HttpResponse<any>) => {
      // Supprimer la ligne dans this.stagiaires
      this.poes.splice(
        this.poes.findIndex((obj: Poe) => obj.id === poe.id),
        1
      );
      this.snackBar.open(`Le stagiaire ${poe.id} a été supprimé`, 'Compris', {
        duration: 2500,
      });
    });
  }
}
