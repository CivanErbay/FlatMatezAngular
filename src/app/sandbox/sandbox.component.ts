import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {


  favDishes = [
    {
      title: "Pizza", price: 9
    }, {
      title: "Falafel", price: 3
    }, {
      title: "PadThai", price: 7
    }, {
      title: "Döner", price: 4
    }, {
      title: "Pasta", price: 8
    },
    
  ]


  themeColor = "red"
  constructor() { }

  ngOnInit(): void {
  }

  updateColor() {
    console.log("Whoop")
    this.themeColor ="salmon";
  }

  updateColor2() {
    this.themeColor = "blue"
  }

}
