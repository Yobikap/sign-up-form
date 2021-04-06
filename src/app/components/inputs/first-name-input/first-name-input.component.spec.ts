import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstNameInputComponent } from './first-name-input.component';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

describe('FirstNameInputComponent', () => {
  let component: FirstNameInputComponent;
  let fixture: ComponentFixture<FirstNameInputComponent>;

  beforeEach(async () => {
    const formGroup: FormGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)])
    });

    const formGroupDirective: FormGroupDirective = new FormGroupDirective([], []);
    formGroupDirective.form = formGroup;

    await TestBed.configureTestingModule({
      declarations: [ FirstNameInputComponent ],
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
    fixture = TestBed.createComponent(FirstNameInputComponent);
    component = fixture.componentInstance;
    component.formControlName = 'firstName';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should define component', () => {
    const compiled = fixture.debugElement.nativeElement;
    const firstname = compiled.querySelector('input[name="firstname"]');
    expect(firstname).toBeDefined();
  });
});
