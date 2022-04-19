import { Component, OnInit } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';

import { FetchApiDataService } from '../fetch-api-data.service';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public fetchApiData: FetchApiDataService,
    public router: Router,
    public snackBar: MatSnackBar,
    public dialog: MatDialogModule
  ) { }

  ngOnInit(): void {
  }

  navToProfile(): void {
    this.router.navigate(['profile']);
  }

  navToMovies(): void {
    this.router.navigate(['movies']);
  }
  /**
   * Function to logout a user by clearing local storage of any tokens/usernames. 
   * Users are then redirected to the welcome screen after logout. 
   */
  logout(): void {
    if (confirm('You sure?')) {
      localStorage.clear();
      this.snackBar.open('logout successful', 'ok', {
        duration: 3000,
      });
      this.router.navigate(['welcome'])
    }
  }
}
