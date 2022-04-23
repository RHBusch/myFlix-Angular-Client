/**
 * The UserRegistrationForm Component contains the logic to register a user to the myFlix database. 
 * Users are prompted to enter and submit the relevant information to become a user. 
 * @module UserRegistrationFormComponent
 */

import { Component, OnInit, Input } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog'

import { FetchApiDataService } from '../fetch-api-data.service'

import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})
export class UserRegistrationFormComponent implements OnInit {

  /**
   * The below inputs are bound by ngmodel in the html template
   */
  @Input() userData = {
    Username: '', Password: '',
    Email: '', Birthday: ''
  };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar) { }

  ngOnInit(): void { }

  /**
   * The registerUser function triggers the fetchApiData service userRegistration call. 
   * Users input their information and become registered users. 
   * The dialog closes and returns the user to the welcome page where they can then login. 
   * @function registerUser
   */

  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe((result) => {
      this.dialogRef.close()
      console.log(result)
      this.snackBar.open('registration successful', 'ok', {
        duration: 2000
      });
    }, (result) => {
      this.snackBar.open(result, 'ok', { duration: 2000 })
    })
  }
}
