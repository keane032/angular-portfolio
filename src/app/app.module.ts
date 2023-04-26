import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeListComponent } from './modulos/home/home-list/home-list.component';
import { HomeModule } from './modulos/home/home.module';
import { LoginModule } from './modulos/login/login.module';
import { FormLoginComponent } from './modulos/login/form-login/form-login.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const root: Routes = [
  {path:'',component: FormLoginComponent},
  {path:'home',component: HomeListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HomeModule,
    LoginModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(root),
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
