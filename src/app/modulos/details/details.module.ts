import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeatailsComponent } from './details-component/details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DeatailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    DeatailsComponent
  ]
})
export class LoginModule { }
