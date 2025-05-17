import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeatailsComponent } from './details-component/details.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@NgModule({
  declarations: [
    DeatailsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    DeatailsComponent
  ]
})
export class LoginModule { }
