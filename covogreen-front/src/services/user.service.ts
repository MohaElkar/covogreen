import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../class/user';
import { Car } from '../class/car';

@Injectable()
export class UserService {

    private uri: string;

    constructor(
        private http: Http,
    )
    {
		this.uri = "http://localhost:1313/user";
	}

    createUser(user: User, car: Car): Observable<string> {
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        console.log(user);
        console.log(car);

        return this.http.post(this.uri, JSON.stringify({user, car}), options)
            .map((response: Response) => {
                console.log(response.text());
                return response.text();
            });
    }

    updateUser(user: User): Observable<string> {
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(this.uri, JSON.stringify(user), options)
            .map((response: Response) => {
                console.log(response.text());
                return response.text();
            });
    }

    deleteUser(user: User): Observable<string> {
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(this.uri, JSON.stringify(user), options)
            .map((response: Response) => {
                console.log(response.text());
                return response.text();
            });
    }

    getUser(): Observable<User> {
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        let user = localStorage.getItem('currentUser');
        return this.http.post(this.uri, user, options)
            .map((response: Response) => {
                var result = response.text();
                return JSON.parse(result);
            });
    }

    updatePassword(user: User): Observable<string> {
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(this.uri + "password", JSON.stringify(user), options)
            .map((response: Response) => {
                console.log(response.text());
                return response.text();
            });
    }

}
