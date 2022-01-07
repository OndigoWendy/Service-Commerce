import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RoutingModule } from './routing/routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { HeaderComponent } from './navigation/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';



 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    CommonModule,
    MatSidenavModule,
    MatTabsModule,
    RoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule


  ],
  exports: [
    MatTabsModule,
    MatSidenavModule,
      MatToolbarModule,
      CommonModule,
      MatIconModule,
      MatButtonModule
     
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}

