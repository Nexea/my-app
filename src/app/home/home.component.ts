import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./new-home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // let skillCard = document.getElementById('tec_skills')
    // let bounding = skillCard.getBoundingClientRect();

    // if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
    //   bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    // ) {
    //   skillCard.classList.add('rollIn')
    //   console.log('In the viewport!');
    // } else {
    //   console.log('Not in the viewport');
    // }
  }

}
