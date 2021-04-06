import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastNameInputComponent } from './last-name-input.component';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

describe('LastNameInputComponent', () => {
  let component: LastNameInputComponent;
  let fixture: ComponentFixture<LastNameInputComponent>;

  beforeEach(async () => {
    const formGroup: FormGroup = new FormGroup({
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)])
    });

    const formGroupDirective: FormGroupDirective = new FormGroupDirective([], []);
    formGroupDirective.form = formGroup;

    await TestBed.configureTestingModule({
      declarations: [ LastNameInputComponent ],
      providers: [
        {
          provide: ControlContainer,
          useValue: formGroupDirective
        }
      ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastNameInputComponent);
    component = fixture.componentInstance;
    component.formControlName = 'lastName';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should define component', () => {
    const compiled = fixture.debugElement.nativeElement;
    const lastname = compiled.querySelector('input[name="lastname"]');
    expect(lastname).toBeDefined();
  });
});
