import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-display-synopsis',
  templateUrl: './display-synopsis.component.html',
  styleUrls: ['./display-synopsis.component.scss']
})
export class DisplaySynopsisComponent implements OnInit {

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
