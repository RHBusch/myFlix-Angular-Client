/**
 * This code creates the logic running the DisplayDirectorComponent.
 * It renders a mat dialog displaying director information.
 * @module DisplayDirectorComponent
 */

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-display-director',
  templateUrl: './display-director.component.html',
  styleUrls: ['./display-director.component.scss']
})
export class DisplayDirectorComponent implements OnInit {

  /**
   * MAT_DIALOG_DATA injection token is used to pass data from the MovieCardComponenet to the constructor. 
   * @param data 
   */

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Name: string;
      Bio: string;
    }) { }

  ngOnInit(): void {
  }

}
