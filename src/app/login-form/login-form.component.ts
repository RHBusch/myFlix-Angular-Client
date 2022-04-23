/**
 * This code invokes the logic powering the LoginFormComponent
 * It renders a view of the login form, a mat dialog. 
 * Users submit login information via the form to access the app.
 * @module LoginFormComponent
 */

import { Component, OnInit, Input } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

import { FetchApiDataService } from '../fetch-api-data.service';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  /**
   * Using input as part of ngModel in the html template to set the values of username and password to userData.
   */

  @Input() userData = { Username: '', Password: '' }
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<LoginFormComponent>,
    public snackBar: MatSnackBar,
    private router: Router) { }
  ngOnInit(): void { }

  /**
   * Using the loginUser method to trigger the fetchApiData service. 
   * The API call will use userData, the username and password, to log a user into the system. 
   * Upon successful login, Angular router will take a user to the main movies display page.
   * @function loginUser
   * @param this.userData
   * @returns user data as JSON
   */

  loginUser(): void {
    this.fetchApiData.userLogin(this.userData).subscribe((result) => {
      this.dialogRef.close();
      console.log(result);
      localStorage.setItem('token', result.token);
      localStorage.setItem('Username', result.user.Username)
      this.snackBar.open('login successful', 'Ok', {
        duration: 2000
      });
      this.router.navigate(['movies']);
    }, (result) => {
      this.snackBar.open(result, 'ok', {
        duration: 2000
      });
    });
  }
}
