import { SignupForm } from "../components/signup/signupForm.component";
import { BasePage } from "./base.page";

export class SignupPage extends BasePage {
  constructor() {
    super("/auth/register");
    this.signupForm = new SignupForm();
  }
}
// Feature: New user sign up

//   Background:
//     Given a user is on the sign up page

//   Scenario: User successfully registers with valid values for mandatory fields
//     When the user fills in all the required fields with valid values
//     And clicks the button to submit the form
//     Then the user is redirected to the login page

//   Scenario: User cannot register with already registered email
//     When the user fills in all the required fields with valid values
//     But the email the user provides for email field is already registered
//     And the user clicks the button to submit the form
//     Then the user sees and error message
//     And remains on the registration page
//     And the registration form is not submitted
