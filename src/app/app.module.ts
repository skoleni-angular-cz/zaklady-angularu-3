import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TemplateDrivenUserBasicInfoComponent } from './template-driven-user-basic-info/template-driven-user-basic-info.component';
import { ReactiveUserAdvancedInfoComponent } from './reactive-user-advanced-info/reactive-user-advanced-info.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    TemplateDrivenUserBasicInfoComponent,
    ReactiveUserAdvancedInfoComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
