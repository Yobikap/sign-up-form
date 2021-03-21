import { Component, forwardRef, Injector, OnInit } from '@angular/core';
import {
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { validateFirstNameInput } from '../../../validators/validate-inputs';
import { ControlValueAccessorConnector } from '../../control-value-accessor-connector';

@Component({
  selector: 'app-first-name-input',
  templateUrl: './first-name-input.component.html',
  styleUrls: ['./first-name-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FirstNameInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useValue: validateFirstNameInput,
      multi: true
    }
  ]
})
export class FirstNameInputComponent extends ControlValueAccessorConnector implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {}
}
