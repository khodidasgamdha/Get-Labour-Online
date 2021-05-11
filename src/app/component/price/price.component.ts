import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  constructor() { }

  // 0 to 2 year experience
  zeroYear = [
    { position: 'Plumber', price: 30, img: '../../../assets/img/plumber.jpg' },
    { position: 'Carpenter', price: 35, img: '../../../assets/img/carpenter.jpg' },
    { position: 'Chasm', price: 50, img: '../../../assets/img/chasm.jpg' },
    { position: 'Driver', price: 45, img: '../../../assets/img/driver.jpg' },
    { position: 'Electrician', price: 25, img: '../../../assets/img/electrician.jpg' },
    { position: 'Farm Labour', price: 30, img: 'f../../../assets/img/farm-labour.jpg' },
    { position: 'Blacksmith', price: 35, img: '../../../assets/img/blacksmith.jpg' },
    { position: 'Other', price: 40, img: '../../../assets/img/other.jpg' },
  ]

  // 2 to 5 year experience
  twoYear = [
    { position: 'Plumber', price: 35, img: '../../../assets/img/plumber.jpg' },
    { position: 'Carpenter', price: 40, img: '../../../assets/img/carpenter.jpg' },
    { position: 'Chasm', price: 55, img: '../../../assets/img/chasm.jpg' },
    { position: 'Driver', price: 50, img: '../../../assets/img/driver.jpg' },
    { position: 'Electrician', price: 30, img: '../../../assets/img/electrician.jpg' },
    { position: 'Farm Labour', price: 35, img: 'f../../../assets/img/farm-labour.jpg' },
    { position: 'Blacksmith', price: 40, img: '../../../assets/img/blacksmith.jpg' },
    { position: 'Other', price: 45, img: '../../../assets/img/other.jpg' },
  ]

  // 5+ year experience
  fiveYear = [
    { position: 'Plumber', price: 40, img: '../../../assets/img/plumber.jpg' },
    { position: 'Carpenter', price: 45, img: '../../../assets/img/carpenter.jpg' },
    { position: 'Chasm', price: 60, img: '../../../assets/img/chasm.jpg' },
    { position: 'Driver', price: 55, img: '../../../assets/img/driver.jpg' },
    { position: 'Electrician', price: 35, img: '../../../assets/img/electrician.jpg' },
    { position: 'Farm Labour', price: 40, img: 'f../../../assets/img/farm-labour.jpg' },
    { position: 'Blacksmith', price: 45, img: '../../../assets/img/blacksmith.jpg' },
    { position: 'Other', price: 50, img: '../../../assets/img/other.jpg' },
  ]

  ngOnInit(): void {
  }

}
