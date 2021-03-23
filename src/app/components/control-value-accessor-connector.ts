import { Component, Injector, Input, Type, ViewChild } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlDirective
} from '@angular/forms';

@Component({
  template: ''
})
// tslint:disable-next-line:component-class-suffix
export class ControlValueAccessorConnector implements ControlValueAccessor {
  @ViewChild(FormControlDirective, {static: true})
  formControlDirective!: FormControlDirective;

  @Input()
  formControl!: FormControl;

  @Input()
  formControlName!: string;

  constructor(private injector: Injector) {}

  get control(): FormControl {
    const controlContainer: AbstractControl | null = this.injector.get<ControlContainer>(ControlContainer).control;
    const formControl: false | AbstractControl | null = controlContainer !== null && controlContainer.get(this.formControlName);

    return this.formControl || formControl;
  }

  writeValue(value: any): void {
    if (this.formControlDirective.valueAccessor) {
      this.formControlDirective.valueAccessor.writeValue(value);
    }
  }

  registerOnChange(fn: any): void {
    if (this.formControlDirective.valueAccessor) {
      this.formControlDirective.valueAccessor.registerOnChange(fn);
    }
  }

  registerOnTouched(fn: any): void {
    if (this.formControlDirective.valueAccessor) {
      this.formControlDirective.valueAccessor.registerOnTouched(fn);
    }
  }
}
