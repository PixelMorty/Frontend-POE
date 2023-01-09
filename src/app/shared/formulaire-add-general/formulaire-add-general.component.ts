import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take } from 'rxjs';
import { Poe } from 'src/app/core/models/poe';
import { StagiaireModel } from 'src/app/core/models/stagiaire-model';
import { StagiaireService } from 'src/app/core/services/stagiaire-service';
import { DateLessThan } from 'src/app/core/validators/date-less-than';
import { PoeService } from 'src/app/poes/services/poe/poe.service';
import { StagiairesPoes } from '../enums/stagiaires-poes';

@Component({
  selector: 'app-formulaire-add-general',
  templateUrl: './formulaire-add-general.component.html',
  styleUrls: ['./formulaire-add-general.component.scss']
})
export class FormulaireAddGeneralComponent implements OnInit {

  public addForm!: FormGroup; // Groupe de Contrôles de formulaire
  public class_poe_or_Stagiaire !: String;
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private stagiaireService: StagiaireService,
    private poeService: PoeService,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit(): void {
  //console.log(this.route.snapshot.pathFromRoot[this.route.snapshot.pathFromRoot.length -2].url.toString())
  
  this.route.parent!.url.pipe(take(1),map((r)=>r[0].path)).subscribe(
    (urlType)=> {
      //console.log(urlType)
      
      JSON.stringify(urlType)
      
      //console.log(this.route.snapshot.url[this.route.snapshot.url.length-2].toString())
      if (urlType==StagiairesPoes.STAGIAIRES){
        this.class_poe_or_Stagiaire = StagiairesPoes.STAGIAIRES;
      // console.log(this.route.snapshot.url[this.route.snapshot.url.length-2].toString())
      }else if (this.route.snapshot.pathFromRoot[this.route.snapshot.pathFromRoot.length -2].url.toString()==StagiairesPoes.POES) {
        this.class_poe_or_Stagiaire =StagiairesPoes.POES;
        //console.log(this.route.snapshot.url[this.route.snapshot.url.length-2].toString())
      }
      if(urlType==StagiairesPoes.STAGIAIRES){
        this.addForm = this.formBuilder.group({
          lastName: [
            '', // Default value (here empty)
            // <input placeholder="Helper text..." value="">
            [
              Validators.required // Indique que le contrôle doit impérativement être défini avec une valeur non nulle
            ]
          ],
          firstName: [
            '',
            Validators.required
          ],
          gender: [
            'M'
          ],
          birthDate: [
            '',
            [
              Validators.required,
              DateLessThan.dateLessThan()
            ]
          ],
          phoneNumber: [
            ''
          ],
          email: [
            '',
            [
              Validators.required,
              Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
            ]
          ]
        });
      }else if (this.class_poe_or_Stagiaire==StagiairesPoes.POES){
        this.addForm = this.formBuilder.group({
          poeType: [
            '', // Default value (here empty)
            // <input placeholder="Helper text..." value="">
            [
              Validators.required // Indique que le contrôle doit impérativement être défini avec une valeur non nulle
            ]
          ],
          title: [
            '',
            Validators.required
          ],
    
          beginDate: [
            '',
            [
              Validators.required,
            ]
          ],
          endDate: [
            '',
            [
              Validators.required,
            ]
          ],
    
        });
      }
      
      
    }
  );
    
   
    
  }




  public onSubmit(): void {

    if (this.class_poe_or_Stagiaire == StagiairesPoes.STAGIAIRES){
      this.stagiaireService.create(this.addForm.value)
          .subscribe((stagiaire: StagiaireModel) => {
              this.router.navigate(['/', StagiairesPoes.STAGIAIRES]);
      });
    }else if(this.class_poe_or_Stagiaire == StagiairesPoes.POES){
      this.poeService.create(this.addForm.value)
      .subscribe((poe: Poe) => {
          this.router.navigate(['/', StagiairesPoes.POES]);

  });
    }
  }
}


