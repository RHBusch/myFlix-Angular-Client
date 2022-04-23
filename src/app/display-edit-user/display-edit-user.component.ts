/**
 * DisplayEditUserComponent contains the logic to edit a user's profile details.
 * It displays the edit user dialog and makes the relevant API calls to update user information.
 * @DisplayEditUserComponent
 */

import { Component, OnInit, Input } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog'

import { FetchApiDataService } from '../fetch-api-data.service'

import { MatSnackBar } from '@angular/material/snack-bar'


@Component({
  selector: 'app-display-edit-user',
  templateUrl: './display-edit-user.component.html',
  styleUrls: ['./display-edit-user.component.scss']
})
export class DisplayEditUserComponent implements OnInit {
  Username = localStorage.getItem('Username');
  user: any = {}


  @Input() userData: any = {
    Username: "",
    Password: "",
    Email: "",
    Birthday: "",
  };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<DisplayEditUserComponent>,


  ) { }
  /**
   * The getUser function is called as soon as the component has completed loading.
   * This fills the template with updated data. 
   */
  ngOnInit(): void {
    this.getUser();

  }

  /**
   * Calls the getUser method to trigger the fetchApiData service to get user details. 
   * @function getUser
   * @returns user data in an object
   */
  getUser(): void {
    const user = localStorage.getItem('Username');
    console.log(user);
    this.fetchApiData.getUserFavorites().subscribe((resp: any) => {
      this.user = resp;
      console.log(this.user);
      return this.user;
    })
  }

  /**
   * Calls the edit user method to trigger the fetchApiData service to edit user details. 
   * Resets local storage to reflect updated user details.
   * Reloads the window to ensure all data updates correctly.
   * @function editUser 
   * @returns an object with the updated user details.
   */
  editUser(): void {
    this.fetchApiData.editUser(this.userData).subscribe((resp) => {
      this.dialogRef.close();
      localStorage.setItem('Username', resp.Username);
      setTimeout(() => {
        window.location.reload();
      });
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }


}


