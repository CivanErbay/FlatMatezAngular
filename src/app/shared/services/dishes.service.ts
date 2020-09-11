import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DishesService {


  //Stored Data 

  private dishes = [
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


  constructor() { }

  // Functionality

  //get All
  all() {
      return this.dishes;
  }

  //get One specific
  find(dishId) {

  }

  create(entireDish) {
    this.dishes.push(entireDish) 
  }

  update(entireDish) {
    console.log("Update Dish", entireDish)
  }

  delete(dishId) {
    console.log("Update Dish", dishId)
  }

}
