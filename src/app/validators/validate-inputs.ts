import { FormControl } from '@angular/forms';

interface ErrorInterface {
  given: string;
  message: string;
}

function validatePasswordInput(formControl: FormControl): ErrorInterface | null {
  let or = '';
  let isValid = true;
  const error: ErrorInterface = {
    given: formControl.value,
    message: 'Password must not contain value of '
  };

  const firstNameValue = formControl.parent?.get('firstName')?.value;
  const lastNameValue = formControl.parent?.get('lastName')?.value;

  if (firstNameValue && firstNameValue.length > 1 && formControl.value.indexOf(firstNameValue) !== -1) {
    error.message += 'first name';
    or = ' or ';
    isValid = false;
  }

  if (lastNameValue && lastNameValue.length > 1 && formControl.value.indexOf(lastNameValue) !== -1) {
    error.message += or + 'last name';
    isValid = false;
  }

  return isValid ? null : error;
}

function validateEmailInput(formControl: FormControl): ErrorInterface | null {
  let isValid = true;
  const error: ErrorInterface = {
    given: formControl.value,
    message: 'Email address is invalid'
  };

  if (formControl.value) {
    const parts = formControl.value.split('@');
    const domainName = parts.length === 2 ? parts[1] : null;

    if (!domainName) {
      isValid = false;
    }

    const domainNameParts = domainName.split('.');
    const tld = domainNameParts.length === 2 ? domainNameParts[1] : null;

    if (!tld) {
      isValid = false;
      return isValid ? null : error;
    }

    if (tld.length > 63) {
      isValid = true;
    }
  }

  return isValid ? null : error;
}

export { validatePasswordInput, validateEmailInput };
