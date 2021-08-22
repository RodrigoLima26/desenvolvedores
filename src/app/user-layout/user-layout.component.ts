import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {

    constructor(private router: Router) {

    }

    ngOnInit(): void {

    }

    ngOnChanges() {

    }

  redirect() {

    this.router.navigate(['/']);
  }
}
