import { FormControl } from '@angular/forms';

interface ErrorInterface {
  given: string;
  message: string;
}

function validateFirstNameInput(formControl: FormControl): ErrorInterface | null {
  return validationNameInput(formControl, 'First name may not be empty or less than 2 characters');
}

function validateLastNameInput(formControl: FormControl): ErrorInterface | null {
  return validationNameInput(formControl, 'Last name may not be empty or less than 2 characters');
}

function validationNameInput(formControl: FormControl, message: string): ErrorInterface | null {
  const error: ErrorInterface = {
    given: formControl.value,
    message
  };

  return (formControl.value && formControl.value.length > 1) ? null : error;
}

function validateEmailInput(formControl: FormControl): ErrorInterface | null {
  const error: ErrorInterface = {
    given: formControl.value,
    message: 'Email cannot be empty'
  };

  return (formControl.value && formControl.value.length > 1) ? null : error;
}

function validatePasswordInput(formControl: FormControl): ErrorInterface | null {
  const error: ErrorInterface = {
    given: formControl.value,
    message: 'Password cannot be empty'
  };

  return (formControl.value && formControl.value.length > 1) ? null : error;
}

export { validateFirstNameInput, validateLastNameInput, validateEmailInput, validatePasswordInput };
