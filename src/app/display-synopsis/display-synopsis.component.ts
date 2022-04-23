/**
 * This code creates the logic running the DisplaySynopsisComponent.
 * It renders a mat dialog displaying synopsis information.
 * @module DisplaySynopsisComponent
 */

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-display-synopsis',
  templateUrl: './display-synopsis.component.html',
  styleUrls: ['./display-synopsis.component.scss']
})
export class DisplaySynopsisComponent implements OnInit {


  /**
    * MAT_DIALOG_DATA injection token is used to pass data from the MovieCardComponenet to the constructor. 
    * @param data 
   */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Title: string,
      ImagePath: string,
      Description: string,
      Genre: string
    }

  ) { }

  ngOnInit(): void {
  }

}
