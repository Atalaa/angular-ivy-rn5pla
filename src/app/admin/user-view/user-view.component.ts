import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { User } from '../../services/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css'],
})
export class UserViewComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  id: string;

  ngOnInit() {
    this.route.paramMap.subscribe((e) => {
      this.id = e.get('id');
    });
    console.log(this.route.snapshot.paramMap.get('id'));
  }
}
