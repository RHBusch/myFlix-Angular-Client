
/**
 * This code details the logic for the Navbar Component. 
 * The Navbar Component includes three functions: navToProfile, navToMovies, and logout. 
 * @module NavbarComponent
 */

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

  /**
   * Function navToProfile directs a user to the profile page 
   */
  navToProfile(): void {
    this.router.navigate(['profile']);
  }
  /**
     * Function navToMovies directs a user to the movies page 
     */
  navToMovies(): void {
    this.router.navigate(['movies']);
  }
  /**
   * Function logout clears localStorage of any usernames or tokens, etc.
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
