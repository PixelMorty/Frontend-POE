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
  public stagiaires: StagiaireModel[] = [];
  public lastNameFirst =false
  public full =false
  public showLi: string = 'A';
  
  constructor(
    private router: Router, // DI => Dependency Injection
    private stagiaireServices : StagiaireService
  ) {
  }

  ngOnInit(): void {
    this.stagiaireServices.findAll().subscribe((stagiaires:StagiaireModel[])=>{
        this.stagiaires=stagiaires // initialise this.stagiaires quand la requette observée a stagiaireService est finie 
    });
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
    this.router.navigate(['/detail', id]);
  }
}
