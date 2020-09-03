import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule } from '@angular/forms';
import { CleaningplanComponent } from './cleaningplan/cleaningplan.component';
import { ErrorComponent } from './error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { PlaygroundComponent } from './playground/playground.component'

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CleaningplanComponent,
    ErrorComponent,
    PlaygroundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
