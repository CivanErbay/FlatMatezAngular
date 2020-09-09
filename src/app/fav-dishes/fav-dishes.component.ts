import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fav-dishes',
  templateUrl: './fav-dishes.component.html',
  styleUrls: ['./fav-dishes.component.scss']
})
export class FavDishesComponent implements OnInit {

  @Input() allDishes: any; 

  constructor() { }

  filteredDishes: any[] = [];

  ngOnInit(): void {

    this.allDishes;

    this.filterDishes(this.allDishes)
  }

  filterDishes(dishes) {
    for (let i = 0; i < dishes.length; i++) {
      if(dishes[i].favourite) {
        this.filteredDishes.push(dishes[i])
      }
     }
  }

}
