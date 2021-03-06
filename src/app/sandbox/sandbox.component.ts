import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { DishesService } from '../shared/services/dishes.service';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss'],
})
export class SandboxComponent implements OnInit {
  constructor(public dialog: MatDialog, private dishesService: DishesService) {}

  ngOnInit(): void {
    this.resetSelectedDish();
    this.dishes = this.dishesService.all();
  }

  //VARIABLES
  themeColor = 'red';
  currentDish: any;
  dishes = null;
  showFavMeals = false;

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


  resetSelectedDish() {
    const emptyDish = {
      id: null,
      dish: '',
      ingOne: '',
      ingTwo: '',
      ingThree: '',
      duration: null,
      favourite: false,
    };

    this.currentDish = emptyDish;
  }

  cancel() {
    this.resetSelectedDish();
  }

  saveDish(title, ingOne, ingTwo, ingThree) {
    const addDish = {
      id: this.dishes.length,
      dish: title,
      ingOne: ingOne,
      ingTwo: ingTwo,
      ingThree: ingThree,
      duration: 10,
      favourite: false,
    };
      this.dishesService.create(addDish);
  }

  deleteDish(dishId) {
    this.dishesService.delete(dishId)
  }



  showFavs() {
    this.showFavMeals = !this.showFavMeals;
  }
}
