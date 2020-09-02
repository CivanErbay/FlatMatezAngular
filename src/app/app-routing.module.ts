import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CleaningplanComponent } from './cleaningplan/cleaningplan.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path: '', component: LandingComponent  },
  { path: 'clean', component: CleaningplanComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
