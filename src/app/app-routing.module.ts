import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CleaningplanComponent } from './cleaningplan/cleaningplan.component';
import { ErrorComponent } from './error/error.component';
import { SandboxComponent } from './sandbox/sandbox.component';


const routes: Routes = [
  //Specific misspell will REDIRECT to specific component
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'cleanss', redirectTo: '/clean', pathMatch: 'full' },

  //Common routing
  { path: 'landing', component: LandingComponent  },
  { path: 'clean', component: CleaningplanComponent},
  { path: 'sandbox', component: SandboxComponent},

  //Whenever something misspelled it will redirect to 404
  { path: '**', component: ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
