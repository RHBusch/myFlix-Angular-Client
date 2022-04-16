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

  ngOnInit(): void {
    this.getUser();
  }
  getUser(): void {
    const user = localStorage.getItem('Username');
    console.log(user);
    this.fetchApiData.getUserFavorites().subscribe((resp: any) => {
      this.user = resp;
      console.log(this.user);
    })
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

  displayEditUser(): void {
    this.dialog.open(DisplayEditUserComponent, {
      width: '500px',
    });
  }
}