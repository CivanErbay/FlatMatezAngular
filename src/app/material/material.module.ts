import { NgModule } from '@angular/core';
import { MatInputModule} from '@angular/material/input'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar';


const MaterialComponents = [
  MatInputModule,
  MatSlideToggleModule,
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatSliderModule,
  MatProgressBarModule

]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
