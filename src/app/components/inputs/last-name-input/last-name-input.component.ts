import { Component, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorConnector } from '../../control-value-accessor-connector';

@Component({
  selector: 'app-last-name-input',
  templateUrl: './last-name-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LastNameInputComponent),
      multi: true
    }
  ]
})

export class LastNameInputComponent extends ControlValueAccessorConnector {
  constructor(injector: Injector) {
    super(injector);
  }
}
