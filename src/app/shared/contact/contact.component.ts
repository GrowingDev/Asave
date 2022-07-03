import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InputSelectOption } from '../models/input-select-option.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({
    title: new FormControl(null, Validators.required),
  });

  genders: InputSelectOption[] = [
    {value: 'gender-1', viewValue: 'Frau'},
    {value: 'gender-2', viewValue: 'Mann'},
    {value: 'gender-3', viewValue: 'Divers'},
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.contactForm)
  }
}
