/**
 * This contains the logic powering the WelcomePageComponent. 
 * Users can select either to login or register and open the relevant dialog. 
 * @module WelcomePageComponent
 */

import { Component, OnInit } from '@angular/core';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { MatDialog } from '@angular/material/dialog';
import { ProfilePageComponent } from '../profile-page/profile-page.component';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  /**
   * The openUserRegistrationDialog function opens a dialog for a user to register to access the myFlix App. 
   * @function openUserRegistrationDialog
   */
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: '280px'
    })
  }

  /**
   * The openUserLoginDialog function opens a dialog for a user to login and access the myFlix App.  
   * @function openUserLoginDialog
   */
  openUserLoginDialog(): void {
    this.dialog.open(LoginFormComponent, {
      width: '280px'
    })
  }

}
