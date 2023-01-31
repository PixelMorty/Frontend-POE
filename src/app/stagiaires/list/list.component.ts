import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { StagiaireModel } from 'src/app/core/models/stagiaire-model';
import { StagiaireService } from 'src/app/core/services/stagiaire-service';
import { StagiairesPoes } from 'src/app/shared/enums/stagiaires-poes';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public stagiaires: StagiaireModel[] = [];
  public lastNameFirst = false;
  public full = false;
  public showLi: string = 'A';

  modalRef: BsModalRef | undefined;
  message: string | undefined;

  constructor(
    private router: Router, // DI => Dependency Injection
    private stagiaireServices: StagiaireService,
    private snackBar: MatSnackBar,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.stagiaireServices
      .findAll()
      .subscribe((stagiaires: StagiaireModel[]) => {
        this.stagiaires = stagiaires; // initialise this.stagiaires quand la requette observée a stagiaireService est finie
      });
  }

  public sortLastName(){
    this.stagiaires = this.stagiaires.sort((a, b) => a.lastName.localeCompare(b.lastName));
  }

  public sortLastNameReversed(){
    this.stagiaires = this.stagiaires.sort((b, a) => a.lastName.localeCompare(b.lastName));
  }

  public sortFirstName(){
    this.stagiaires = this.stagiaires.sort((a, b) => a.firstName.localeCompare(b.firstName));
  }

  public sortFirstNameReversed(){
    this.stagiaires = this.stagiaires.sort((b, a) => a.firstName.localeCompare(b.firstName));
  }

   public sortBirthdate(){
     this.stagiaires = this.stagiaires.sort((a, b) => a.birthDate?.valueOf()- b.birthDate?.valueOf());
   }
   public sortBirthdateReversed(){
    this.stagiaires = this.stagiaires.sort((b, a) => a.birthDate?.valueOf() - b.birthDate?.valueOf());
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

  public goToUpdate(id: number): void {
    this.router.navigate([StagiairesPoes.STAGIAIRES, 'add', id]);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(stagiaire: StagiaireModel): void {
    this.message = 'Confirmed!';
    this?.modalRef?.hide();
    this.stagiaireServices.delete(stagiaire).subscribe(() => {
      this.stagiaires.splice(
        this.stagiaires.findIndex(
          (obj: StagiaireModel) => obj.id === stagiaire.id
        ),
        1
      );
    });
    this.snackBar.open(
      `Le stagiaire ${stagiaire.lastName} ${stagiaire.firstName} a été supprimé`,
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
