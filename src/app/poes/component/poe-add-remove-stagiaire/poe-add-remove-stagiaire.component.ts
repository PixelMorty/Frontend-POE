import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Detailtrainee } from 'src/app/core/models/detailtrainee.model';
import { Poe } from 'src/app/core/models/poe';
import { StagiaireModel } from 'src/app/core/models/stagiaire-model';
import { StagiaireService } from 'src/app/core/services/stagiaire-service';
import { StagiairesPoes } from 'src/app/shared/enums/stagiaires-poes';
import { PoeService } from '../../services/poe/poe.service';
import { HttpResponse } from '@angular/common/http';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-poe-add-remove-stagiaire',
  templateUrl: './poe-add-remove-stagiaire.component.html',
  styleUrls: ['./poe-add-remove-stagiaire.component.scss']
})
export class PoeAddRemoveStagiaireComponent implements OnInit {

  private idPoe !: Number;
  public stagiaires !: Detailtrainee[];
  public poe !: Poe;
  public lastNameFirst = false;
  public full = false;
  public showLi: string = 'A';

  modalRef: BsModalRef | undefined;
  message: string | undefined;

  constructor(
    private stagiaireService: StagiaireService,
    private poeService: PoeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {


    try {
      this.activatedRoute.paramMap.subscribe((routeParams) => {
        this.idPoe = new Number(routeParams.get('id'));


        this.poeService.findOne(this.idPoe.valueOf()).subscribe((poe: Poe) => {
          this.poe = poe;
        });

        this.stagiaireService.findAllDetailed().subscribe((detailTrainee: Detailtrainee[]) => {
          this.stagiaires = detailTrainee;
        });
      });
    } catch (error) {
      this.router.navigate(['/', StagiairesPoes.POES]);
    }

  }

  public changeGender(): boolean {
    if (this.showLi === 'F') {
      return this.showLi === 'F';
    }

    if (this.showLi === 'M') {
      return this.showLi === 'M';
    }

    return this.showLi === 'X';
  }

  public isShown(stagaire: any): boolean {
    if (this.showLi === 'A') {
      return true;
    }

    if (this.showLi === 'F') {
      return stagaire.gender === 'F';
    }

    if (this.showLi === 'M') {
      return stagaire.gender === 'M';
    }

    return stagaire.gender === 'X';
  }

  public getDisplayRowsNumber(): number {
    if (this.showLi === 'A') {
      return this.stagiaires.length;
    }

    //return this.stagiaires.filter((stagiaire: any) => stagiaire.gender === this.showLi).length;

    // Avec un for of
    let displayedItem: number = 0;
    for (const stagiaire of this.stagiaires) {
      if (stagiaire.gender === this.showLi) {
        displayedItem += 1;
      }
    }
    return displayedItem;
  }

  public goToDetail(id: number): void {
    console.log(`Got ${id} from list`);
    this.router.navigate([StagiairesPoes.STAGIAIRES, 'detail', id]);
  }


  public onRemove(idTrainee: Number) {
    this.stagiaireService.removePoe(idTrainee);
    window.location.reload();
  }

  public onAdd(idTrainee: Number) {
    this.stagiaireService.setPoe(idTrainee, this.idPoe);
    window.location.reload();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(stagiaire: StagiaireModel): void {
    this.message = 'Confirmed!';
    this?.modalRef?.hide();
    this.stagiaireService
      .delete(stagiaire)
      .subscribe((response: HttpResponse<any>) => {
        this.stagiaires.splice(
          this.stagiaires.findIndex(
            (obj: StagiaireModel) => obj.id === stagiaire.id
          ),
          1
        );
      });
    this.snackBar.open(
      `Le stagiaire ${stagiaire.id} a été supprimé`,
      'Compris',
      {
        duration: 2500,
      }
    );
  }
  decline(): void {
    this.message = 'Declined!';
    this?.modalRef?.hide();
  }

}


