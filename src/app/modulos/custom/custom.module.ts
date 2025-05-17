import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPageComponent } from './custom-page/custom-page.component';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { DragObjectComponentComponent } from 'src/app/shared/DragObjectComponent/DragObjectComponent.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatExpansionModule,
    
  ],
  declarations: [CustomPageComponent, DragObjectComponentComponent]
})
export class CustomModule { }
