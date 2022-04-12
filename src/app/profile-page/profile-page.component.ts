import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FetchApiDataService } from '../fetch-api-data.service'

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  user: any = {};
  Username = localStorage.getItem('user');
  movies: any[] = [];
  favoriteMovies: any = [];
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public router: Router,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.getFavMovie();
  }
  getUser(): void {
    let user = localStorage.getItem('Username');
    console.log(user);
    if (user) {
      this.fetchApiData.getUserFavorites().subscribe((resp: any) => {
        this.user = resp;
        console.log(this.user);
        this.getFavMovie
      })
    }
  }

  getFavMovie(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.favoriteMovies = resp.filter((movie: any) => {
        return this.user.favoriteMovies.includes(movie._id)
      })
      console.log(this.favoriteMovies);
      return this.favoriteMovies;
    })
  }

  deleteFavoriteMovie(id: string): void {
    this.fetchApiData.deleteFavoriteMovie(id).subscribe((resp: any) => {
      this.snackBar.open('Removed from favorite movies.', 'ok', {
        duration: 2000,
      })
      this.ngOnInit();
      return this.favoriteMovies
    });
  }
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
}

