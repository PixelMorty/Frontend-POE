import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StagiaireService } from 'src/app/core/services/stagiaire-service';

@Component({
  selector: 'app-poe-add-remove-stagiaire',
  templateUrl: './poe-add-remove-stagiaire.component.html',
  styleUrls: ['./poe-add-remove-stagiaire.component.scss']
})
export class PoeAddRemoveStagiaireComponent implements OnInit {

  private idPoe! : Number;
  private idTrainee !:Number;

  constructor(
    private stagiaireService : StagiaireService,
    private router : Router,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
// instancier idPoe et tout
  }

  onSubmit(){
    //this.stagiaireService.setPoe(this.idPoe,this.idTrainee);
  }
}
