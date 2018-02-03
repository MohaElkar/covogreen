import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { TextEqualityValidatorModule } from 'ngx-text-equality-validator';
import { UserService } from '../../services/user.service';
import { User } from '../../class/user';
import * as md5 from 'md5';

@Component({
    selector: 'app-newuser',
    templateUrl: './newuser.component.html',
    providers: [UserService],
})

export class NewuserComponent implements OnInit {

    public user: User;

    public have_car: boolean = false;
    public have_car_ctrl: FormControl;

    public is_driver: boolean;
    public is_driver_ctrl: FormControl;

    public createUserForm: FormGroup;
    //public createCarForm: FormGroup;

    constructor(
        private formBulder: FormBuilder,
        private userService: UserService
    ) { }

    ngOnInit() {

        this.have_car_ctrl = this.formBulder.control('');
        this.is_driver_ctrl = this.formBulder.control('');

        this.createUserForm = this.formBulder.group({
            username: this.formBulder.control('', Validators.required),
            email: this.formBulder.control('', Validators.required),
            firstName: this.formBulder.control('', Validators.required),
            lastName: this.formBulder.control('', Validators.required),
            password: this.formBulder.control('', Validators.required),
            confirmPassword: this.formBulder.control('', Validators.required),
            city: this.formBulder.control('', Validators.required),
            address: this.formBulder.control('', Validators.required),
            cp: this.formBulder.control('', Validators.required),
            phone: this.formBulder.control('', Validators.required),
            is_driver: "",
            have_car: "",

            licencePlate: this.formBulder.control(''),
            make: this.formBulder.control(''),
            model: this.formBulder.control(''),
            capacity: this.formBulder.control('')
        });

        /*
        this.createCarForm = this.formBulder.group({
            licencePlate: this.formBulder.control('', Validators.required),
            make: this.formBulder.control('', Validators.required),
            capacity: this.formBulder.control('', Validators.required)
        });
        */

    }

    createUser() {
        this.user = this.createUserForm.value;
        this.user.password = md5(this.createUserForm.value.password);
        //console.log(this.user);

        this.userService.createUser(this.createUserForm.value)
            .subscribe(result => {
                alert(result);
            });

    }

    changeIsDriver($event): void {
        this.is_driver = JSON.parse($event.value);
    }

    changeHaveCar($event): void {
        this.have_car = JSON.parse($event.value);
    }

    checkIsDriver(): boolean {
        return this.is_driver;
    }

    checkHaveCar(): boolean {
        return this.have_car;
    }
}
