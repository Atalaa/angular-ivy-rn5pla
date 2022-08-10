import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private httpClient: HttpClient) {
    /*Promises
    const fetchAuthor = fetch('http://localhost:3000/posts/2');
    fetchAuthor
      .then((response) => response.json())
      .then((data) => (this.name = data.author));
    */

    //Angular way
    const author$: Observable<any> = this.httpClient.get<any>(
      'http://localhost:3000/posts/2'
    );
    author$.subscribe((data) => (this.name = data.author));
  }
}
