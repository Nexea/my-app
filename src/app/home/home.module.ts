import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule,
    
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }