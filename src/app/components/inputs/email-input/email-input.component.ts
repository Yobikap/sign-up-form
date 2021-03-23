import { Component, forwardRef, Injector, OnInit } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorConnector } from '../../control-value-accessor-connector';
import { validateEmailInput } from '../../../validators/validate-inputs';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useValue: validateEmailInput,
      multi: true
    }
  ]
})
export class EmailInputComponent extends ControlValueAccessorConnector {
  constructor(injector: Injector) {
    super(injector);
  }
}
