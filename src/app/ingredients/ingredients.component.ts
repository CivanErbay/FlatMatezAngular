import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

ingredients = 
[
  { dish: "Pizza",
    ingOne: "Dough",
    ingTwo: "Cheese",
    ingTree: "Tomato",
    duration: 15,
    favourite: true
},{ dish: "Falafel",
    ingOne: "Chickpeas",
    ingTwo: "Bread",
    ingTree: "Herbs",
    duration: 4,
    favourite: true
},{ dish: "PadThai",
    ingOne: "Noodels",
    ingTwo: "Peanuts",
    ingTree: "Chicken",
    duration: 10,
    favourite: true
},{ dish: "Döner",
    ingOne: "Bread",
    ingTwo: "Meet",
    ingTree: "Salad",
    duration: 3,
    favourite: false
},{ dish: "Pasta",
    ingOne: "Noodels",
    ingTwo: "Oil",
    ingTree: "Tomato",
    duration: 15,
    favourite: false
},
]

  constructor() { }
  ngOnInit(): void {
  }

}
