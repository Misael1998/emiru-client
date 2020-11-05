import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navStyle: string = 'navbar-light';
  navColor: string = '#38475C';

  isUserLogged: boolean = false;

  currentUser: User;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.auth
      .isLoggedIn()
      .then(() => {
        this.isUserLogged = true;
        this.currentUser = JSON.parse(localStorage.getItem('user'));
      })
      .catch(() => {
        this.isUserLogged = false;
      });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(e) {
    let element = document.getElementById('navbar');

    if (window.pageYOffset > element.clientHeight) {
      // this.navColor = '#7ac7c4';
      this.navColor = '#000000';
    } else {
      this.navColor = '#38475C';
    }
  }

  onLogOut(): void {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
