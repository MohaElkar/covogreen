import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {RechercheFormEnt} from '../../class/RechercheFormEnt';

@Component({
  selector: 'app-recherche-page',
  templateUrl: './recherche-page.component.html',
  styleUrls: ['./recherche-page.component.css']
})
export class RecherchePageComponent implements OnInit {
  rechercheFormEnt: RechercheFormEnt;

  constructor(private route: ActivatedRoute) {
      this.rechercheFormEnt = new RechercheFormEnt();
  }

  ngOnInit() {
      // On récupère les informations passé en paramètre/
      this.route.queryParams
          .subscribe(params => {
              this.rechercheFormEnt.depart = params.depart;
              this.rechercheFormEnt.destination = params.destination;
              this.rechercheFormEnt.dateDepart = params.dateDepart;
          });
  }
}
