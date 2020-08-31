import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cleaningplan',
  templateUrl: './cleaningplan.component.html',
  styleUrls: ['./cleaningplan.component.scss']
})
export class CleaningplanComponent implements OnInit {

  memberlist$ 
  
  constructor() { }

  ngOnInit(): void {
    this.memberlist$ = [
      { name: "Anthea", age: "29" },
      { name: "Paco", age: "27" },
      { name: "Civan", age: "27" },
      { name: "Paul", age: "28" },
      { name: "Eyleen", age: "26" }
    ]
  }

}
