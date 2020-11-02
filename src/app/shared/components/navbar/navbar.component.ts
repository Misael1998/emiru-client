import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navStyle: string = 'navbar-light';
  navColor: string = '#38475C';

  constructor(private router: Router) {}

  ngOnInit(): void {}

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
}
