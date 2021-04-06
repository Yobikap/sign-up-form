import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { HttpHandler } from '@angular/common/http';
import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FirstNameInputComponent } from '../inputs/first-name-input/first-name-input.component';
import { LastNameInputComponent } from '../inputs/last-name-input/last-name-input.component';
import { EmailInputComponent } from '../inputs/email-input/email-input.component';
import { PasswordInputComponent } from '../inputs/password-input/password-input.component';
import { SubmitButtonComponent } from '../inputs/submit-button/submit-button.component';
import { ControlValueAccessorConnector } from '../control-value-accessor-connector';
import { AppRoutingModule } from '../../app-routing.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { Injector } from '@angular/core';

class HttpMock {
  post(): Observable<any> {
    return new Observable<any>(subscribe => {
      subscribe.next({ status: 200 });
    });
  }
}

// we increase the default timeout because of async connection
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let httpTestingController: HttpTestingController;
  let httpService: HttpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent, FirstNameInputComponent, LastNameInputComponent,
        EmailInputComponent, PasswordInputComponent, SubmitButtonComponent,
        ControlValueAccessorConnector ],
      providers: [
        HttpHandler, ControlContainer, Injector,
        { provide: HttpService, useClass: HttpMock }
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComponent);

    component = fixture.componentInstance;
    component.signUpForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    httpService = TestBed.inject(HttpService);

    fixture.detectChanges();
  });

  afterEach(() => {
    component.formSubmitted = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input elements', () => {
    const compiled = fixture.debugElement.nativeElement;

    const firstName = compiled.querySelector('input[name="firstname"]');
    const lastName = compiled.querySelector('input[name="lastname"]');
    const email = compiled.querySelector('input[name="email"]');
    const password = compiled.querySelector('input[name="password"]');

    expect(firstName).toBeTruthy();
    expect(lastName).toBeTruthy();
    expect(email).toBeTruthy();
    expect(password).toBeTruthy();
  });

  it('should render submit button element', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.signUpForm.addControl('submit', new FormControl(''));

    const submit = compiled.querySelector('button[name="submit"]');
    expect(submit).toBeTruthy();
  });

  it('should show success message', () => {
    component.formSubmitted = true;
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const successMessage = compiled.querySelector('span[class="success"]');
    expect(successMessage).toBeTruthy();
  });

  it('should submit the form', done => {
    component.signUpForm.get('firstName')?.setValue('John');
    component.signUpForm.get('lastName')?.setValue('Doe');
    component.signUpForm.get('email')?.setValue('john.doe@maildrop.cc');
    component.signUpForm.get('password')?.setValue('Welcome123!');

    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelector('button[name="submit"]');

    button.click();
    // after a click detectChanges
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const successMessage = compiled.querySelector('span[class="success"]');
      expect(component.signUpForm.invalid).toBeFalsy();
      expect(component.formSubmitted).toBeTruthy();
      expect(successMessage).toBeTruthy();
      done();
    });
  });
});
