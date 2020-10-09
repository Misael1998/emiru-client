import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-nav',
  templateUrl: './landing-nav.component.html',
  styleUrls: ['./landing-nav.component.css'],
})
export class LandingNavComponent implements OnInit {
  navStyle: string = 'navbar-light';
  navColor: string = '#38475C';

  constructor(router: Router) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onScroll(e) {
    let element = document.getElementById('navbar');

    if (window.pageYOffset > element.clientHeight) {
      this.navStyle = 'navbar-dark bg-dark';
      this.navColor = '';
    } else {
      this.navStyle = 'navbar-light ';
      this.navColor = '#38475C';
    }
  }
}
