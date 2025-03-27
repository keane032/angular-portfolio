import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeListComponent } from './modulos/home/home-list/home-list.component';
import { HomeModule } from './modulos/home/home.module';
import { LoginModule } from './modulos/details/details.module';

import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { DeatailsComponent } from './modulos/details/details-component/details.component';
import { CustomModule } from './modulos/custom/custom.module';
import { CustomPageComponent } from './modulos/custom/custom-page/custom-page.component';
import { SharedComponent } from './modulos/shared/shared/shared.component';
import { SharedModule } from './modulos/shared/shared.module';

const root: Routes = [
  {path:'',component: DeatailsComponent},
  {path:'home',component: HomeListComponent},
  {path:'custom',component: CustomPageComponent},
  {path:'shared',component: SharedComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HomeModule,
    LoginModule,
    CustomModule,
    SharedModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(root),
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
