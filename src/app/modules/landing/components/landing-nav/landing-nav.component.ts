import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-nav',
  templateUrl: './landing-nav.component.html',
  styleUrls: ['./landing-nav.component.css'],
})
export class LandingNavComponent implements OnInit {
  navStyle: string = 'navbar-light';

  constructor(router: Router) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onScroll(e) {
    let element = document.getElementById('navbar');

    if (window.pageYOffset > element.clientHeight) {
      this.navStyle = 'navbar-dark bg-dark';
    } else {
      this.navStyle = 'navbar-light bg-light';
    }
  }
}
