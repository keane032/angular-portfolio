import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPageComponent } from './custom-page/custom-page.component';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatExpansionModule
  ],
  declarations: [CustomPageComponent]
})
export class CustomModule { }
