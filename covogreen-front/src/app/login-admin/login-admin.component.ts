import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as md5 from 'md5';
import { User } from '../../class/user';

import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css'],
  providers: [AuthentificationService]

})
export class LoginAdminComponent implements OnInit {

    public user: User;
    public loginAdminForm: FormGroup;

    constructor(
        private router: Router,
        private formBulder: FormBuilder,
        private authenticationService: AuthentificationService,
	) { }

    ngOnInit() {

        this.loginAdminForm = this.formBulder.group({
            username: "",
            password: ""
        });

    }

    /**
     * Method for accept or refuse connexion to dashboard administrator
     */
    loginAdmin() {
        this.user = this.loginAdminForm.value;
        this.user.password = md5(this.user.password);
        console.log(this.user);

        this.authenticationService.loginAdmin(this.user)
            .subscribe(result => {
                if (result === true)  location.reload(true);
            },
            err => alert("Connexion refusée.")
        );
    }

    /**
     * Method for checking the protected administrator pages, reserved for authentified administators.
     * @returns {boolean}
     */
    checkAuthAdmin(): boolean {
        let tokenUser = localStorage.getItem('currentAdmin');

        if (tokenUser !== null) return true;
        else return false;
    }
}
