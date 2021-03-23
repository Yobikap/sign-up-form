import { Component, forwardRef, Injector, OnInit } from '@angular/core';
import {
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { ControlValueAccessorConnector } from '../../control-value-accessor-connector';

@Component({
  selector: 'app-first-name-input',
  templateUrl: './first-name-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FirstNameInputComponent),
      multi: true
    }
  ]
})
export class FirstNameInputComponent extends ControlValueAccessorConnector {
  constructor(injector: Injector) {
    super(injector);
  }
}
