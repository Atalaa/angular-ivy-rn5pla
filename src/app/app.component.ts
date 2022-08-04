import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private httpClient: HttpClient) {
    /*Promises
    fetch('http://localhost:3000/posts/2')
      .then((response) => response.json())
      .then((data) => (this.name = data.author));
    */

    //Angular way
    httpClient
      .get<any>('http://localhost:3000/posts/2')
      .subscribe((data) => (this.name = data.author));
  }
}
