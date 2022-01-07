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


 

@NgModule({
  declarations: [
    AppComponent,
    CommonModule,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    CommonModule,
    MatSidenavModule,
    MatTabsModule,
    RoutingModule,
    MatToolbarModule,

  ],
  exports: [
    MatTabsModule,
    MatSidenavModule,
      MatToolbarModule,
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}
