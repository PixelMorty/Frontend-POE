import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StagiaireModel } from 'src/app/core/models/stagiaire-model';
import { StagiaireService } from 'src/app/core/services/stagiaire-service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public nbShown=0;
  public full: boolean =false;
  public lastNameFirst: boolean =false;

  public stagiaires: StagiaireModel[] = [];
  // public constructor(){
  //   const stagiaireService : StagiaireService =  new StagiaireService();
  //   stagiaireService.deserialize() // JSON => Java Script Object Notation (Objet JS en plain text)
  //   this.stagiaires=stagiaireService.getStagiaires()
  // }
  public showLi: string = 'M';
  constructor(private router:Router){ // DI Dependency injection (services, ici un routeur)
    const service: StagiaireService  = new StagiaireService();
    service.deserialize();
    this.stagiaires = service.getStagiaires();
  }
  ngOnInit(): void {
  }
  public changeGender(): void {
    if (this.showLi === 'M') {
      this.showLi = 'F';
    } else {
      this.showLi = 'M';
    }
  }

  public isShown(stagaire: any): boolean {
    if (this.showLi === 'A') {
      return true;
    }

    if (this.showLi === 'F') {
      return stagaire.gender === 'F';
    }

    return stagaire.gender === 'M';
  }
  getNumberofStagiaires(): number{
    if (this.showLi === 'A') {
      return this.stagiaires.length;
    }


    return this.stagiaires.filter(s=>s.gender==this.showLi).length;


  }
  public goToDetail(id : number): void {
    this.router.navigate(['/detail',id]);
  }


}
