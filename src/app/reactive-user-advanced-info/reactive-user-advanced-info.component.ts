import { Component, OnInit } from '@angular/core';
import { UserGender } from '../model';

@Component({
  selector: 'app-reactive-user-advanced-info',
  templateUrl: './reactive-user-advanced-info.component.html',
  styleUrls: ['./reactive-user-advanced-info.component.css'],
})
export class ReactiveUserAdvancedInfoComponent implements OnInit {

  readonly UserGender = UserGender;

  constructor() {}

  ngOnInit() {}

  submitForm() {}

  resetForm() {}

}
