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
  @Input() userData = {
    Username: "",
    Password: "",
    Email: "",
    Birthday: "",
  };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<DisplayEditUserComponent>

  ) { }

  ngOnInit(): void {
  }
  editUser(): void {
    const username = localStorage.getItem('Username') || ""; //This "or null" allows the string to receive a null value rather than an error. 
    this.fetchApiData.editUser(username, this.userData).subscribe((response) => this.dialogRef.close)
  }

}
