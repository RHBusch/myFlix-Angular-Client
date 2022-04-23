/**
 * This code details the logic powering the ProfilePageComponent.
 * Users can view/edit/delete their profiles.
 * Users can delete favorite movies from their profile. 
 * @module ProfilePageComponent
 */

import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FetchApiDataService } from '../fetch-api-data.service'
import { DisplayEditUserComponent } from '../display-edit-user/display-edit-user.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  user: any = {};
  Username: any = localStorage.getItem('Username')
  movies: any[] = [];
  favoriteMovies: any = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public router: Router,
    public snackBar: MatSnackBar,
  ) { }

  /**
   * Using ngOnInit to call the getUser and getFavMovie functions to load data into the template once the component has loaded succesfully. 
   */

  ngOnInit(): void {
    this.getUser();
    this.getFavMovie();
  }
  /**
     * Calls the getUser function to trigger the fetchApiData service to get user details. 
     * @function getUser
     * @returns user data in an object
     */

  getUser(): void {
    const user = localStorage.getItem('Username');
    console.log(user);
    this.fetchApiData.getUserFavorites().subscribe((resp: any) => {
      this.user = resp;
      console.log(this.user);
    })
  }
  /**
   * Calls the getFavMovie function to trigger the fetchApiData service for getAllMovies and filters through movies to identify favorites. 
   * @function getFavMovie
   * @returns a filtered array of movies that have been selected as favorites
   */
  getFavMovie(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      this.movies.forEach((movie: any) => {
        if (this.user.FavoriteMovies.includes(movie._id)) {
          this.favoriteMovies.push(movie);
        }
      })
    });
  }

  /**
      * The deleteFavoriteMovie function triggers the fetchApiData service deleteFavoriteMovie call. 
      * A movie is then removed from a user's favorite movies array in the DB and the heart icon switches from red to gray. 
      * A popup will display if the function is successful.
      * @function deleteFavoriteMovie
      * @param id 
      * @returns The user's favorite movies array without the removed movie.
      */

  deleteFavoriteMovie(id: string): void {
    this.fetchApiData.deleteFavoriteMovie(id).subscribe((resp: any) => {
      this.snackBar.open('Removed from favorite movies.', 'ok', {
        duration: 2000,
      })
      window.location.reload();
      this.ngOnInit();
      return this.favoriteMovies
    });
  }
  /**
   * The deleteUser function triggers the fetchApiData service deleteUser call.
   * A user is prompted to confirm whether they want to delete their profile. 
   * A user's profile is then deleted and users are redirected to the welcome screen. 
   * @function deleteUser
   */


  deleteUser(): void {
    if (confirm('You sure?')) {
      this.fetchApiData.deleteUser().subscribe(() => {
        this.snackBar.open('Account deleted', 'ok', {
          duration: 3000,
        });
        localStorage.clear();
      }, () => {
        this.router.navigate(['welcome']).then(() => {
          window.location.reload();
        })

      })
    }
  }

  /**
   * displayEditUser function is used to open a dialog where users can edit their profile information. 
   * @function displayEditUser
   */
  displayEditUser(): void {
    this.dialog.open(DisplayEditUserComponent, {
      width: '500px',
    });
  }
}