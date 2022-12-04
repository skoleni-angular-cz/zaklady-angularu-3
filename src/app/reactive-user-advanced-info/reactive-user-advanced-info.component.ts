import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserGender } from '../model';

@Component({
  selector: 'app-reactive-user-advanced-info',
  templateUrl: './reactive-user-advanced-info.component.html',
  styleUrls: ['./reactive-user-advanced-info.component.css'],
})
export class ReactiveUserAdvancedInfoComponent implements OnInit {

  form = new FormGroup({
    firstName: new FormControl<string | undefined>(undefined, [Validators.required]),
    lastName: new FormControl<string | undefined>(undefined, [Validators.required]),
    gender: new FormControl<UserGender | undefined>(UserGender.MALE, [Validators.required]),
    age: new FormControl<number | undefined>(undefined, [Validators.required, Validators.min(18)]),
    address: new FormGroup({
      street: new FormControl<string | undefined>(undefined, [Validators.required]),
      city: new FormControl<string | undefined>(undefined, [Validators.required]),
      country: new FormControl<string | undefined>(undefined, [Validators.required])
    }),
  });

  readonly UserGender = UserGender;

  constructor() {}

  ngOnInit() {}

  submitForm() {}

  resetForm() {}

}
