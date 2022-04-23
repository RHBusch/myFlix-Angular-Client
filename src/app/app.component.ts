/**
 * The AppComponent is the root component of the entire app --- it renders in index.html
 * @module AppComponent
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myFlix-Angular-Client';
}
