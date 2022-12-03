import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from '../pages/home-page/home-page.component';
import { PersonasPageComponent } from '../pages/personas-page/personas-page.component';
import { RedesignPageComponent } from '../pages/redesign-page/redesign-page.component';
import { IterativePageComponent } from '../pages/iterative-page/iterative-page.component';
import { ReactPageComponent } from '../pages/react-page/react-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PersonasPageComponent,
    RedesignPageComponent,
    IterativePageComponent,
    ReactPageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    LayoutModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
