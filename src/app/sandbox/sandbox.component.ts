import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {

  currentDish = null;

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
  constructor(public dialog: MatDialog) { }
 
  ngOnInit(): void {
  }

  updateColor() {
    console.log("Whoop")
    this.themeColor ="salmon";
  }

  updateColor2() {
    this.themeColor = "blue"
  }

  selectDish(dish: string) {
    console.log("Select dish Fired", dish)
    this.currentDish = dish;
      this.dialog.open(DialogExampleComponent);
  }
}



