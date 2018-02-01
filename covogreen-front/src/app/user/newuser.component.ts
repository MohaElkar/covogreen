import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';
import { TextEqualityValidatorModule } from 'ngx-text-equality-validator';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-newuser',
    templateUrl: './newuser.component.html',
    providers: [UserService]
})

export class NewuserComponent implements OnInit {

    public createUserForm: FormGroup;

    constructor(
        private formBulder: FormBuilder,
        private userService: UserService
    ) { }

    ngOnInit() {

        this.createUserForm = this.formBulder.group({
            username: this.formBulder.control('', Validators.required),
            email: this.formBulder.control('', Validators.required),
            firstName: this.formBulder.control('', Validators.required),
            lastName: this.formBulder.control('', Validators.required),
            password: this.formBulder.control('', Validators.required),
            confirmPassword: this.formBulder.control('', Validators.required),
            city: this.formBulder.control('', Validators.required),
            street: this.formBulder.control('', Validators.required),
            cp: this.formBulder.control('', Validators.required),
            country: this.formBulder.control('', Validators.required),
        });

    }

    createUser() {
        console.log(this.createUserForm.value);

        this.userService.createUser(this.createUserForm.value)
            .subscribe(result => {
                alert(result);
            });
    }
}
