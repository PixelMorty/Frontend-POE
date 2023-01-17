import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Detailpoe } from 'src/app/core/models/detailpoe.model';
import { StagiairesPoes } from 'src/app/shared/enums/stagiaires-poes';
import { PoeService } from '../../services/poe/poe.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  private id : Number=0;
  public poedetail !: Detailpoe;
  constructor(
    private poeService : PoeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
   }

  ngOnInit(): void {
    // recup l'id
    this.route.paramMap.subscribe(
      (routeParams) => {
      this.id = new Number(routeParams.get('id'));
    });
    // recup le detailpoe:

    try {
    this.poeService.findOneDetailed(this.id)
        .subscribe((detailpoe: Detailpoe) => {
          this.poedetail = detailpoe;
        
      console.log(JSON.stringify(this.poedetail));
      console.log(this.poedetail.id)
    })
    } catch (error) {
            
 

     // this.router.navigate(['/', StagiairesPoes.POES]);
    }

  }


  

}
