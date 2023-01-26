import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Poe } from 'src/app/core/models/poe';
import { StagiairesPoes } from 'src/app/shared/enums/stagiaires-poes';
import { PoeService } from '../../services/poe/poe.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public poes: Poe[] = [];
  public showLi: string = 'All';

  modalRef: BsModalRef | undefined;
  message: string | undefined;

  constructor(
    private _poeService: PoeService,
    private snackBar: MatSnackBar,
    private router: Router,
    private modalService: BsModalService
  ) {}

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

  public goToTraineesList(): void {
    this.router.navigate([StagiairesPoes.STAGIAIRES, 'list']);
  }

  public goToTraineesAdd(): void {
    this.router.navigate([StagiairesPoes.STAGIAIRES, 'add']);
  }

  public goToPOESList(): void {
    this.router.navigate([StagiairesPoes.POES, 'list']);
  }

  public goToPOESAdd(): void {
    this.router.navigate([StagiairesPoes.POES, 'add']);
  }

   public goToDetail(id: number): void {
     console.log(`Got ${id} from list`);
     this.router.navigate([StagiairesPoes.POES, 'detail', id]);
   }

  public goToUpdate(id: number): void {
    this.router.navigate([StagiairesPoes.POES, 'add', id]);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(poe: Poe): void {
    this.message = 'Confirmed!';
    this?.modalRef?.hide();
    this._poeService.delete(poe).subscribe((response: HttpResponse<any>) => {
      this.poes.splice(
        this.poes.findIndex((obj: Poe) => obj.id === poe.id),
        1
      );
    });
    this.snackBar.open(`Le stagiaire ${poe.id} a été supprimé`, 'Compris', {
      duration: 2500,
    });
  }
  decline(): void {
    this.message = 'Declined!';
    this?.modalRef?.hide();
  }
}
