import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css'],
})
export class UserViewComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  id: string;
 
  ngOnInit() {
    this.route.paramMap.subscribe(e => {
      console.log(e.get('id'))
    })
  };


    // .pipe(
    //   map(el => el.get('id')),
    //   switchMap()
    // )

    console.log(this.route.snapshot.paramMap.get('id'));
  }
}
