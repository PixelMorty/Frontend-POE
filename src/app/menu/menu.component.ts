import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StagiairesPoes } from '../shared/enums/stagiaires-poes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

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
}
