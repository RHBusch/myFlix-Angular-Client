import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-display-director',
  templateUrl: './display-director.component.html',
  styleUrls: ['./display-director.component.scss']
})
export class DisplayDirectorComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Name: string;
      Bio: string;
    }) { }

  ngOnInit(): void {
  }

}
