import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html", // View
  styleUrls: ['./app.component.scss'] // Tableau de SCSS pour la mise en forme
})
export class AppComponent {
  public title = 'Jean-Luc';
  constructor() { }

}
/**
 * 23/11/2022: Matin
 * 
 * Routeurs
 * déplacé ce qu'il y avait dans app component dans les sous components: listcomponenets et detail.components
 * listcomponenets et detail.components représentent une page chacune. Elles se gèrent comme on a géré appcomponent au début
 *  appcomponent.html ne contient plus que <router-outlet> </router-outlet> et toute sorte de code html qui sera rendu sur toutes les pages
 * Le routage se fait dans app-routing modules
 * 23/11/2022 aprem :
 * voir le detail en cliquant ou survolant les noms dans le tableau (paramètres routeurs)
 * clikc--> router sur la page avec les arguments associés
 * 
 */