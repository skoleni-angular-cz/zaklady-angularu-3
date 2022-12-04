import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-user-basic-info',
  templateUrl: './template-driven-user-basic-info.component.html',
  styleUrls: ['./template-driven-user-basic-info.component.css']
})
export class TemplateDrivenUserBasicInfoComponent implements OnInit {

  isAdmin?: boolean;
  username?: string;
  email?: string;

  constructor() {}

  ngOnInit() {}

  onSubmit() {}

}
