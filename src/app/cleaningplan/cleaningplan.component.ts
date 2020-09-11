import { Component, OnInit } from '@angular/core';
import { CleanService } from '../shared/services/clean.service';


@Component({
  selector: 'app-cleaningplan',
  templateUrl: './cleaningplan.component.html',
  styleUrls: ['./cleaningplan.component.scss'],
})
export class CleaningplanComponent implements OnInit {
  //Definition of an Array of Objects
  memberlist: { name: string; age: string }[];

  //currentCleanPerson
  currCleanPersonIndex: number

  now: any = new Date();
  onejan: any = new Date(this.now.getFullYear(), 0, 1);
  week = Math.ceil(
    ((this.now - this.onejan) / 86400000 + this.onejan.getDay() + 1) / 7
  );
  weekday: any = this.now.getDay()

  constructor(private cleanService : CleanService) {}
    
  //returns e.g. 36 (this.week) % 5 (this.memberlist.length) = 1 (leftover of modulo for indexposition)
   putzPlanCalc = () => {
    this.currCleanPersonIndex = this.week % this.memberlist.length
}

//Extra Idea = Add images instead of Names
  ngOnInit(): void {

    this.memberlist = this.cleanService.all();

 
    this.putzPlanCalc()
    
    
  }
}
