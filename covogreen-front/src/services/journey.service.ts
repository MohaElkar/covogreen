import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Journey} from '../class/journey';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class JourneyService {

    private uri: string;

    constructor(private http: Http) {
        this.uri = "http://localhost:1313/";
    }

    createJourney(journey: Journey): Observable<string> {


            return 'ee';
    }
}
