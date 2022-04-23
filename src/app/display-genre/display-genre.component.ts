/**
 * This code creates the logic running the DisplayGenreComponent.
 * It renders a mat dialog displaying genre information.
 * @module DisplayGenreComponent
 */

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-display-genre',
  templateUrl: './display-genre.component.html',
  styleUrls: ['./display-genre.component.scss']
})
export class DisplayGenreComponent implements OnInit {

  /**
     * MAT_DIALOG_DATA injection token is used to pass data from the MovieCardComponenet to the constructor. 
     * @param data 
     */

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Name: string;
      Description: string;
    }
  ) { }

  ngOnInit(): void {
  }

}
