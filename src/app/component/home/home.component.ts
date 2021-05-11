import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  // price
  zeroYear = [
    { position: 'Plumber', price: 30, img: '../../../assets/img/plumber.jpg' },
    { position: 'Carpenter', price: 35, img: '../../../assets/img/carpenter.jpg' },
    { position: 'Chasm', price: 50, img: '../../../assets/img/chasm.jpg' },
    { position: 'Other', price: 45, img: '../../../assets/img/other.jpg' },
  ]

  reviews = [
    [
      { quota: 'People are very Friendly', client: 'Bhavik Padaliya' },
      { quota: 'Thank you, I done My work on time', client: 'Ravi Gajera' },
      { quota: 'Very Well Service', client: 'Jaimin' },
    ],
    [
      { quota: 'Value for Money', client: 'Akash Patel' },
      { quota: 'Very Good Customer Support', client: 'Zeel Panseriya' },
      { quota: 'Good Work !!', client: 'Mayursinh Vadher' }
    ]
  ]

  ngOnInit(): void {
  }

}
