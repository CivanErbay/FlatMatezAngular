import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { CleaningplanComponent } from './cleaningplan/cleaningplan.component';
import { ErrorComponent } from './error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { SandboxComponent } from './sandbox/sandbox.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { FormsModule } from '@angular/forms';
import { FavDishesComponent } from './fav-dishes/fav-dishes.component';
import { DishesService } from './shared/services/dishes.service';
import { CleanService } from './shared/services/clean.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CleaningplanComponent,
    ErrorComponent,
    SandboxComponent,
    DialogExampleComponent,
    IngredientsComponent,
    FavDishesComponent,
  
  ],
  entryComponents: [
   DialogExampleComponent]
   ,
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    DishesService,
    CleanService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
