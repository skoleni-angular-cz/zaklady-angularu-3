import { Component, OnInit } from '@angular/core';
import {FormApiService} from "../form-api.service";

@Component({
  selector: 'app-template-driven-user-basic-info',
  templateUrl: './template-driven-user-basic-info.component.html',
  styleUrls: ['./template-driven-user-basic-info.component.css']
})
export class TemplateDrivenUserBasicInfoComponent implements OnInit {
  isAdmin: boolean;
  username: string;
  email: string;

  constructor(
      private formApiService: FormApiService,
  ) {}

  async ngOnInit() {
    const userBasicInfo = await this.formApiService.getUserBasicInfo();

    this.isAdmin = userBasicInfo.isAdmin;
    this.username = userBasicInfo.username;
    this.email = userBasicInfo.email;
  }

  async onSubmit() {
    await this.formApiService.submitUserBasicInfo({
      isAdmin: this.isAdmin,
      username: this.username,
      email: this.email,
    });
  }

}