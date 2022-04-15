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


  @Input() userData = {
    Username: "this.user.Username",
    Password: "this.user.Password",
    Email: "this.user.Email",
    Birthday: "this.user.Birthday",
  };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<DisplayEditUserComponent>,


  ) { }

  ngOnInit(): void {
    this.getUser();

  }
  getUser(): void {
    const user = localStorage.getItem('Username');
    console.log(user);
    this.fetchApiData.getUserFavorites().subscribe((resp: any) => {
      this.user = resp;
      console.log(this.user);
      return this.user;
    })
  }
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

