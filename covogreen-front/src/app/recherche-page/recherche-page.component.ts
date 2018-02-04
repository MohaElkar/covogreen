import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {RechercheFormEnt} from '../../class/RechercheFormEnt';
import {RechercheTrajetService} from '../../services/recherche-trajet.service';
import {isNullOrUndefined} from 'util';
import {TrajetEnt} from '../../class/TrajetEnt';

@Component({
  selector: 'app-recherche-page',
  templateUrl: './recherche-page.component.html',
  styleUrls: ['./recherche-page.component.css'],
    providers: [RechercheTrajetService]
})
export class RecherchePageComponent implements OnInit {
  rechercheFormEnt: RechercheFormEnt;
  offres: TrajetEnt[];

  error: boolean;
  messagesErreur: string[];
  submitted: boolean;

  constructor(private route: ActivatedRoute, private rechercheService: RechercheTrajetService) {
      this.rechercheFormEnt = new RechercheFormEnt();
      this.offres = [];
      this.error = false;
      this.submitted = false;
  }

  get diagnostic() {
      return JSON.stringify(this.offres);
  }

  ngOnInit() {
      // On récupère les informations passé en paramètre/
      this.route.queryParams.subscribe(params => {

            if ( !isNullOrUndefined(params.depart) && !isNullOrUndefined(params.destination) && !isNullOrUndefined(params.date_trajet) && !isNullOrUndefined(params.place_libre) ) {
                this.rechercheFormEnt.depart = params.depart;
                this.rechercheFormEnt.destination = params.destination;
                this.rechercheFormEnt.date_trajet = params.date_trajet;
                this.rechercheFormEnt.place_libre = params.place_libre;

                // On récupère les trajets depuis le backend.
                this.rechercheService.getTrajets(this.rechercheFormEnt).subscribe(
                    (res: Response) => { // on récupère la réponse.
                        this.submitted = true;
                        // On vérifie la variable 'success'.
                        // Offres existantent.
                        if (res['success'] === true) {
                            // On stocke les trajet dans la variables offres.
                            this.offres = <TrajetEnt[]>res['trajets'];
                            this.error = false;
                        } else if (res['success'] === false) {
                            // On affiche le message d'erreur
                            // Aucune offre ou autre
                            this.error = true;
                            this.messagesErreur = <string[]>res['message'];
                        }
                    }
                );
            } else {
                console.log('recherche-page-component.tx : Formulaire non envoyé');
            }
          }
      );
  }
}
