import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { SubmitButtonComponent } from './components/inputs/submit-button/submit-button.component';
import { PasswordInputComponent } from './components/inputs/password-input/password-input.component';
import { EmailInputComponent } from './components/inputs/email-input/email-input.component';
import { FirstNameInputComponent } from './components/inputs/first-name-input/first-name-input.component';
import { LastNameInputComponent } from './components/inputs/last-name-input/last-name-input.component';
import { ControlValueAccessorConnector } from './components/control-value-accessor-connector';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SubmitButtonComponent,
    PasswordInputComponent,
    EmailInputComponent,
    FirstNameInputComponent,
    LastNameInputComponent,
    ControlValueAccessorConnector
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
