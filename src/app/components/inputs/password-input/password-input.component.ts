import { Component, forwardRef, Injector, OnInit } from '@angular/core';
import { ControlValueAccessorConnector } from '../../control-value-accessor-connector';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { validatePasswordInput } from '../../../validators/validate-inputs';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useValue: validatePasswordInput,
      multi: true
    }
  ]
})
export class PasswordInputComponent extends ControlValueAccessorConnector implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }
}
