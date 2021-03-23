# Sign-up form demo

Welcome to this sign-up demo form.

Before reviewing the code we have to take following into account:

- FormComponent is always the default for routing, so whenever you open your page http://localhost:4200 the FormComponent will always load immediately without any user action
- Email address validator does not check on tld's, therefore I have added own validation for tld
- I have not implemented 'Re-type' your email address again or password, as this was not specifically asked in the assignment.

# For Devs
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
