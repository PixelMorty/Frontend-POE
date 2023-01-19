import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { StagiaireModel } from 'src/app/core/models/stagiaire-model';
import { StagiaireService } from 'src/app/core/services/stagiaire-service';
import { StagiairesPoes } from 'src/app/shared/enums/stagiaires-poes';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public stagiaire: StagiaireModel | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: StagiaireService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (routeParams) => {
        console.log(`Detail got ${routeParams.get('id')}`);
        try {
          this.service.findOne(+routeParams.get('id')!)
            .subscribe((stagiaire: StagiaireModel) => {
              this.stagiaire = stagiaire;
            })
         // console.log(JSON.stringify(this.stagiaire));
        } catch (error) {
          this.router.navigate(['/', 'stagiaires']);
        }
      }
    )
  }
  public goToMenu():void{
    this.router.navigate(['/', 'stagiaires']);
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
    this.router.navigate([StagiairesPoes.STAGIAIRES, 'detail', id]);
  }

  public goToUpdate(id: number): void {
    this.router.navigate([StagiairesPoes.STAGIAIRES, 'add', id]);
  }

}
