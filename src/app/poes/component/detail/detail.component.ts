import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Detailpoe } from 'src/app/core/models/detailpoe.model';
import { StagiairesPoes } from 'src/app/shared/enums/stagiaires-poes';
import { PoeService } from '../../services/poe/poe.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  private id: Number = 0;
  public poedetail!: Detailpoe;
  constructor(
    private poeService: PoeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // recup l'id

    // recup le detailpoe:
    this.route.paramMap.subscribe((routeParams) => {
      this.id = new Number(routeParams.get('id'));

      try {
        this.poeService
          .findOneDetailed(this.id)
          .subscribe((detailpoe: Detailpoe) => {
            this.poedetail = detailpoe;
          });
      } catch (error) {
        this.router.navigate(['/', StagiairesPoes.POES]);
      }
    });
  }

  public goToDetail(id: number): void {
    console.log(`Got ${id} from list`);
    this.router.navigate([StagiairesPoes.STAGIAIRES, 'detail', id]);
  }

  public goToUpdate(id: number): void {
    this.router.navigate([StagiairesPoes.STAGIAIRES, 'add', id]);
  }

  public OnAddRemove() {
    this.router.navigate([
      '/',
      StagiairesPoes.POES,
      'poe-add-remove',
      this.poedetail.id,
    ]);
  }
}
