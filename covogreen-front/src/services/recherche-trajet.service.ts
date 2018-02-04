import { Injectable } from '@angular/core';
import {RechercheFormEnt} from '../class/RechercheFormEnt';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RechercheTrajetService {

  private url = 'http://localhost:1313/';

   httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json'
        })
   };

  constructor( private http: HttpClient) { }

  getTrajets(recherche: RechercheFormEnt): Observable<any> {
    // requete vers le backend /recherche en post avec les information de la recherche.
      return this.http.post(this.url + 'recherche', recherche, this.httpOptions);
  }
}
