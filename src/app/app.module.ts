import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {ShoesComponent} from './shoes/shoes.component';
import {ShoeListComponent} from './shoes/shoe-list/shoe-list.component';
import {ShoeDetailsComponent} from './shoes/shoe-details/shoe-details.component';
import {ShoeEditComponent} from './shoes/shoe-edit/shoe-edit.component';
import {ShoeItemComponent} from './shoes/shoe-list/shoe-item/shoe-item.component';
import {WishListComponent} from './wish-list/wish-list.component';
import {WishEditComponent} from './wish-list/wish-edit/wish-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoesComponent,
    ShoeListComponent,
    ShoeItemComponent,
    ShoeDetailsComponent,
    ShoeEditComponent,
    WishListComponent,
    WishEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
