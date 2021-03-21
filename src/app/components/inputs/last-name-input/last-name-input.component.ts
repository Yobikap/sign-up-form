import { Component, forwardRef, Injector, OnInit } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { validateLastNameInput } from '../../../validators/validate-inputs';
import { ControlValueAccessorConnector } from '../../control-value-accessor-connector';

@Component({
  selector: 'app-last-name-input',
  templateUrl: './last-name-input.component.html',
  styleUrls: ['./last-name-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LastNameInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useValue: validateLastNameInput,
      multi: true
    }
  ]
})
export class LastNameInputComponent extends ControlValueAccessorConnector implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }
}
