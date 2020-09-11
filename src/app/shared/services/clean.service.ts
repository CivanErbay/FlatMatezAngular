import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CleanService {

  constructor() { }

  private memberlist = [
    { name: 'Eyleen', age: '29' },
    { name: 'Paco', age: '27' },
    { name: 'Anthea', age: '27' },
    { name: 'Paul', age: '28' },
    { name: 'Civan', age: '26' },
  ];

  all() {
    return this.memberlist
  }

}
