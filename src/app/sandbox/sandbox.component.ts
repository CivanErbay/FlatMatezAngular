import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {

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
