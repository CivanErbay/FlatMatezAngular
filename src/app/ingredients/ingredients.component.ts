import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent implements OnInit {
  selectedDish: {
    id: number;
    dish: string;
    ingOne: string;
    ingTwo: string;
    ingThree: string;
    duration: number;
    favourite: boolean;
  };

  ingredients = [
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

  constructor() {}
  ngOnInit(): void {}

  dishHandler(dish: any) {
    this.selectedDish = dish;
    console.log(this.selectedDish)
  }

  deleteDish(dishId: any) {
 /* this.ingredients.splice(dishId, 1) */
 this.ingredients = this.ingredients.filter(it => it.id != dishId) 
  }
}
