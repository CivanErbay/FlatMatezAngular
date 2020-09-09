import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { IngredientsComponent } from '../ingredients/ingredients.component';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss'],
})
export class SandboxComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  
  ngOnInit(): void {
    this.resetSelectedDish();
  }



  favDishes = [
    {
      id: 0,
      dish: 'Pizza',
      ingOne: 'Dough',
      ingTwo: 'Cheese',
      ingThree: 'Tomato',
      duration: 15,
      favourite: true,
    },
    {
      id: 1,
      dish: 'Falafel',
      ingOne: 'Chickpeas',
      ingTwo: 'Bread',
      ingThree: 'Herbs',
      duration: 4,
      favourite: true,
    },
    {
      id: 2,
      dish: 'PadThai',
      ingOne: 'Noodels',
      ingTwo: 'Peanuts',
      ingThree: 'Chicken',
      duration: 10,
      favourite: true,
    },
    {
      id: 3,
      dish: 'Döner',
      ingOne: 'Bread',
      ingTwo: 'Meet',
      ingThree: 'Salad',
      duration: 3,
      favourite: false,
    },
    {
      id: 4,
      dish: 'Pasta',
      ingOne: 'Noodels',
      ingTwo: 'Oil',
      ingThree: 'Tomato',
      duration: 15,
      favourite: false,
    },
  ];

  //VARIABLES
  themeColor = 'red';
  currentDish: any;



  //METHODS
  updateColor() {
    this.themeColor = 'salmon';
  }

  updateColor2() {
    this.themeColor = 'blue';
  }

  //TODO: Up & DownVote need to be stored in State
  selectAndVoteDish(dish: string) {
    //Only set currendDish Variable

    this.currentDish = dish;

    //Opens dialogExampleComponent-html and stores Obversable in dialogRef
    //The Second Parameter is for passing in Data into the Dialog Component (through dialog-example.components.ts -- Dependency Injection
    // constructor(@Inject(MAT_DIALOG_DATA) public data:any) { })
    // In the Template you can call {{data.name}}
    let dialogRef = this.dialog.open(DialogExampleComponent, {
      data: { name: this.currentDish.dish },
    });

    //calls afterClosed Method of Dialog and subscribe ob that and shows the result
    //afterClosed() checks the mat-dialog-close value in the .html File of the Dialog Component
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteDish(dishId: any) {
    // this.ingredients.splice(dishId, 1)
    this.favDishes = this.favDishes.filter((it) => it.id != dishId);
  }

  resetSelectedDish() {
    const emptyDish = {
      id: null,
      dish: '',
      ingOne: '',
      ingTwo: '',
      ingThree: '',
      duration: null,
      favourite: false,
    }

    this.currentDish = emptyDish;
  }

  cancel() {
    this.resetSelectedDish();
  }

  saveDish(title, ingOne, ingTwo, ingThree) {
    const addDish = {
      id: this.favDishes.length,
      dish: title,
      ingOne: ingOne,
      ingTwo: ingTwo,
      ingThree: ingThree,
      duration: 10,
      favourite: false,
    }

    this.favDishes.push(addDish)

  }
}
