import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CleaningplanComponent } from './cleaningplan/cleaningplan.component';
import { MembersComponent } from './members/members.component';


const routes: Routes = [
  { path: '', component: LandingComponent  },
  { path: 'clean', 
  component: CleaningplanComponent,
  children:  [
    { path: ':name', component: MembersComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
