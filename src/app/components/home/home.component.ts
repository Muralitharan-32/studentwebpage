import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  image1:string='assets/img/imgportfolio_item_01.png';

  constructor() { }

  ngOnInit() {
  }

}
