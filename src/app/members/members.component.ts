import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { CleaningplanComponent } from '../cleaningplan/cleaningplan.component';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  
  member$;
  constructor(private plan: CleaningplanComponent, private route: ActivatedRoute) { }

  //this is listening to changes in the parameters and route.paramMap returns an Obversable of the Route Parameters (like an Optional &| promise?)
  ngOnInit(): void {
   
    this.member$ = this.route.paramMap.pipe(
   
      switchMap(params => {
        const name = params.get('name');
        let foundPerson = null;
        for (let index = 0; index < this.plan.memberlist$.length; index++) {
         const element = this.plan.memberlist$[index];
         if (element.name == name) {
            foundPerson = element
           break
         }
        }
        return foundPerson
      })
    )
  }

}
