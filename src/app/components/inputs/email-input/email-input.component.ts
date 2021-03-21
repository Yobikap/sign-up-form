import { Component, forwardRef, Injector, OnInit } from '@angular/core';
import { EmailValidator, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { validateEmailInput } from '../../../validators/validate-inputs';
import { ControlValueAccessorConnector } from '../../control-value-accessor-connector';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidator,
      useValue: validateEmailInput,
      multi: true
    }
  ]
})
export class EmailInputComponent extends ControlValueAccessorConnector implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }
}
