import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  formSubmitted: boolean;
  signUpForm: FormGroup;

  constructor(private http: HttpService) {
    this.formSubmitted = false;
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,20}$')])
    }, { updateOn: 'blur' });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.signUpForm.invalid) {
      return;
    }

    this.http.post('https://demo-api.now.sh/users', this.signUpForm.value, {observe: 'response'}).pipe(
      catchError(this.handleError),
    ).subscribe((result: any) => {
      if (result?.status !== 200) {
        throwError(result);
      }
      this.formSubmitted = true;
    });
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
