import { NgModule } from '@angular/core';
import { MatInputModule} from '@angular/material/input'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



const MaterialComponents = [
  MatInputModule,
  MatSlideToggleModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
