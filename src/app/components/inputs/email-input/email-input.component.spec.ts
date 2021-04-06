import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailInputComponent } from './email-input.component';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

describe('EmailInputComponent', () => {
  let component: EmailInputComponent;
  let fixture: ComponentFixture<EmailInputComponent>;

  beforeEach(async () => {
    const formGroup: FormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });

    const formGroupDirective: FormGroupDirective = new FormGroupDirective([], []);
    formGroupDirective.form = formGroup;

    await TestBed.configureTestingModule({
      declarations: [ EmailInputComponent ],
      providers: [
        {
          provide: ControlContainer,
          useValue: formGroupDirective
        }
      ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailInputComponent);
    component = fixture.componentInstance;
    component.formControlName = 'email';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should define component', () => {
    const compiled = fixture.debugElement.nativeElement;
    const email = compiled.querySelector('input[name="email"]');
    expect(email).toBeDefined();
  });
});
