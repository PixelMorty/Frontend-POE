import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Detailtrainee } from 'src/app/core/models/detailtrainee.model';
import { Poe } from 'src/app/core/models/poe';
import { StagiaireModel } from 'src/app/core/models/stagiaire-model';
import { StagiaireService } from 'src/app/core/services/stagiaire-service';
import { StagiairesPoes } from 'src/app/shared/enums/stagiaires-poes';
import { PoeService } from '../../services/poe/poe.service';

@Component({
  selector: 'app-poe-add-remove-stagiaire',
  templateUrl: './poe-add-remove-stagiaire.component.html',
  styleUrls: ['./poe-add-remove-stagiaire.component.scss']
})
export class PoeAddRemoveStagiaireComponent implements OnInit {

  private idPoe !: Number;
  public stagiaires !: Detailtrainee[];
  public poe !: Poe;

  constructor(
    private stagiaireService : StagiaireService,
    private poeService : PoeService,
    private router : Router,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
// instancier stagiaires et poe

try {
  this.activatedRoute.paramMap.subscribe((routeParams)=>{
    this.idPoe = new Number(routeParams.get('id'));
  
  
  // initi poe
    this.poeService.findOne(this.idPoe.valueOf()).subscribe((poe: Poe) => {
        this.poe= poe;
  // init stagiaires
    });

//TOPDO DetailedPoe plus besoin du taleau de stagiaire
  this.stagiaireService.findAllDetailed().subscribe((detailTrainee:Detailtrainee[]) => {
    this.stagiaires= detailTrainee;
  });
});
} catch (error) {
  this.router.navigate(['/', StagiairesPoes.POES]);
}

  }

    
  public onRemove(idTrainee: Number){
    this.stagiaireService.removePoe(idTrainee);
  }

  public onAdd(idTrainee: Number){
    this.stagiaireService.setPoe(idTrainee,this.idPoe);
  }
  
}
