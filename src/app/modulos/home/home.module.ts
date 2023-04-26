import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeListComponent } from './home-list/home-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileInfoComponent } from './profile-info/profile-info.component';

@NgModule({
  declarations: [
    HomeListComponent,
    ProfileInfoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  exports:[
    HomeListComponent
  ]
})
export class HomeModule { }
