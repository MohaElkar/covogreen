// https://blog.thoughtram.io/angular/2016/11/28/testing-services-with-http-in-angular-2.html

import {} from 'jasmine';
import { TestBed, async, inject } from '@angular/core/testing';
import {
    HttpModule,
    Http,
    Response,
    ResponseOptions,
    XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { UserService } from './user.service';
import {Observable} from "rxjs/Observable";

describe('UserService', () => {

    let component: UserService;
    let uri: String = "http://localhost:1313/user";

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                { provide: uri, useValue: uri },
                component,
                { provide: XHRBackend, useClass: MockBackend },
            ]
        });

    }));


    describe('createUser()', () => {

        it('should return an Observable<string> for user without car', () => {

            inject([component, XHRBackend], (componentService, mockBackend) => {

                const mockResponse = {
                    address: "10, Avenue Massena",
                    capacity: "",
                    city: "Nice",
                    confirmPassword: "test",
                    cp: 6000,
                    email: "test@test.fr",
                    firstName: "Jean",
                    have_car: "",
                    is_driver: "true",
                    lastName: "Valjean",
                    licencePlate: "",
                    make: "",
                    model: "",
                    password: "098f6bcd4621d373cade4e832627b4f6",
                    phone: "0600000000",
                    username: "test"
                };

                mockBackend.connections.subscribe((connection) => {
                    connection.mockRespond(new Response(new ResponseOptions({
                        body: JSON.stringify(mockResponse)
                    })));
                });

                componentService.createUser().subscribe((response: Response) => {
                    expect(response.text()).toEqual("Ajout de l'utilisateur OK");
                });

            });

        });

        it('should return an Observable<string> for user with car', () => {

            inject([component, XHRBackend], (componentService, mockBackend) => {

                const mockResponse = {
                    address: "100, Champs Elysée",
                    capacity: 3,
                    city: "Paris",
                    confirmPassword: "test",
                    cp: 75001,
                    email: "toto@test.fr",
                    firstName: "Toto",
                    have_car: "true",
                    is_driver: "true",
                    lastName: "Jean",
                    licencePlate: "77-88-55",
                    make: "Peugeot",
                    model: "RCZ",
                    password: "098f6bcd4621d373cade4e832627b4f6",
                    phone: "0600000001",
                    username: "toto"
                };

                mockBackend.connections.subscribe((connection) => {
                    connection.mockRespond(new Response(new ResponseOptions({
                        body: JSON.stringify(mockResponse)
                    })));
                });

                componentService.createUser().subscribe((response: Response) => {
                    expect(response.text()).toEqual("Ajout de l'utilisateur OK");
                });

            });

        });

    });
});
