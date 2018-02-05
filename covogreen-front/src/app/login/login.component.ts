import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthentificationService } from '../../services/authentification.service';
import * as md5 from 'md5';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [AuthentificationService]
})

export class LoginComponent implements OnInit {

    public username: string;
	public password: string;

	constructor(
		private router: Router,
        private authenticationService: AuthentificationService,
	) { }

	ngOnInit() {}

    login(username, password) {

		this.authenticationService.login(username, md5(password))
			.subscribe(result => {
                console.log(result);
				if (result === true) {
					this.router.navigate(['/']);
				}
            },
            err => alert(err.text())
            //err => console.log(err)
        );
    }

    checkAuth(): boolean {
        let tokenUser = localStorage.getItem('currentUser');

        if (tokenUser !== null) {
            return true;
        } else {
            return false;
        }
    }
}
