import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-newcar',
  templateUrl: './newcar.component.html',
  styleUrls: ['./newcar.component.css']
})
export class NewCarComponent implements OnInit {

    public createCarForm: FormGroup;

    constructor(
        private formBulder: FormBuilder
    ) { }

    ngOnInit() {

        this.createCarForm = this.formBulder.group({
            brand: this.formBulder.control('', Validators.required),
        });

    }

}
