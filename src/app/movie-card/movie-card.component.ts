/**
 * This code invokes the logic powering the MovieCardComponent
 * It renders a view of all movies in the database as individual cards.
 * Users can add or remove movies from their "favorites."
 * Users can click the synopsis, genre, or director buttons to view additional movie details. 
 * Users submit login information via the form to access the app.
 * @module MovieCardComponenet
 */

import { Component, OnInit } from '@angular/core';

import { FetchApiDataService } from '../fetch-api-data.service'
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DisplaySynopsisComponent } from '../display-synopsis/display-synopsis.component';
import { DisplayGenreComponent } from '../display-genre/display-genre.component';
import { DisplayDirectorComponent } from '../display-director/display-director.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];
  favoriteMovies: any[] = [];
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public router: Router,
    public snackBar: MatSnackBar
  ) { }

  /**
   * Calling the getMovies and getFavMovie functions to fill in template data immediately after the component loads. 
   */
  ngOnInit(): void {
    this.getMovies();
    this.getFavMovie();
  }

  /**
   * The getMovies function triggers the fetchApiData service getAllMovies call. 
   * @function getMovies
   * @returns an array of all movie objects in the database
   */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies
    })
  }
  /**
     * The getFavMovie function triggers the fetchApiData service getUserFavorites call. 
     * @function getFavMovie
     * @returns an array of all favorite movie objects in the database
     */
  getFavMovie(): void {
    this.fetchApiData.getUserFavorites().subscribe((resp: any) => {
      this.favoriteMovies = resp.FavoriteMovies;
      console.log(this.favoriteMovies)
      return this.favoriteMovies;
    });
  }
  /**
   * The addFavoriteMovie function triggers the fetchApiData service addFavoriteMovie call. 
   * A movie is then added to a user's favorite movies array in the DB and the heart icon switches from gray to red. 
   * A popup will display if the function is successful.
   * @function addFavoriteMovie
   * @param id 
   * @returns The user's favorite movies array with the newly added movie included.
   */

  addFavoriteMovie(id: string): void {
    console.log(id);
    this.fetchApiData.addFavoriteMovie(id).subscribe((resp: any) => {
      this.favoriteMovies = resp.FavoriteMovies;
      console.log(this.favoriteMovies);
      this.snackBar.open('Movie has been added to favorites', 'ok', {
        duration: 2000,
      });
      this.ngOnInit();
    });
    this.getFavMovie
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
    console.log(id);
    this.fetchApiData.deleteFavoriteMovie(id).subscribe((resp: any) => {
      this.favoriteMovies = resp.FavoriteMovies;
      console.log(this.favoriteMovies);
      this.snackBar.open('Movie has been removed from favorites', 'ok', {
        duration: 5000,
      });
      this.ngOnInit();
      this.getFavMovie
    });
  }
  /**
   * The displaySynopsis function opens a dialog with the synopsis and image of the selected movie.
   * @function displaySynopsis
   * @param title 
   * @param imagePath 
   * @param description 
   */

  displaySynopsis(title: string, imagePath: any, description: string): void {
    this.dialog.open(DisplaySynopsisComponent, {
      data: {
        Title: title,
        ImagePath: imagePath,
        Description: description,
      },
      width: '500px',
    });
  }

  /**
   * The displayGenre function opens a dialog with the synopsis and image of the selected movie.
   * @function displayGenre
   * @param name 
   * @param description 
   */

  displayGenre(name: string, description: string): void {
    this.dialog.open(DisplayGenreComponent, {
      data: {
        Name: name,
        Description: description,
      },
      width: '500px',
    });
  }

  /**
   * The displayDirector function opens a dialog with the synopsis and image of the selected movie.
   * @param name 
   * @param bio 
   */
  displayDirector(name: string, bio: string): void {
    this.dialog.open(DisplayDirectorComponent, {
      data: {
        Name: name,
        Bio: bio,
      },
      width: '500px',
    });
  }

  /**
   * The function isFavorite checks whether a movie is included in a user's favorite movies array
   * @param id 
   * @returns either true or false
   */

  isFavorite(id: string): boolean {
    return this.favoriteMovies.includes(id);
  }


  /**
   * the toggleFavorite function either adds or removes a movie from a user's favorite movies array.
   * A movie already on a user's favorite list can be removed. 
   * A movie not already on a user's favorite list can be added. 
   * @param movie 
   * @returns either the addFavoriteMovie or deleteFavoriteMovie functions. 
   */
  toggleFavorite(movie: any): void {
    this.isFavorite(movie._id)
      ? this.deleteFavoriteMovie(movie._id)
      : this.addFavoriteMovie(movie._id)
  }
}