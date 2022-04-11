import { Component, OnInit } from '@angular/core';

import { FetchApiDataService } from '../fetch-api-data.service'
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DisplaySynopsisComponent } from '../display-synopsis/display-synopsis.component';

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
  ngOnInit(): void {
    this.getMovies();
    this.getFavMovie();
  }
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies
    })
  }
  getFavMovie(): void {
    this.fetchApiData.getUserFavorites().subscribe((resp: any) => {
      this.favoriteMovies = resp.FavoriteMovies;
      console.log(this.favoriteMovies)
      return this.favoriteMovies;
    });
  }
  addFavoriteMovie(id: string): void {
    console.log(id);
    this.fetchApiData.addFavoriteMovie(id).subscribe((resp: any) => {
      this.favoriteMovies = resp.FavoriteMovies;
      console.log(this.favoriteMovies);
      this.snackBar.open('Movie has been added to favorites', 'ok', {
        duration: 5000,
      });
      this.ngOnInit();
      this.getFavMovie
    });
  }

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


}