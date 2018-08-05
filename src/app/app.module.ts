import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {ShoesComponent} from './shoes/shoes.component';
import {ShoeListComponent} from './shoes/shoe-list/shoe-list.component';
import {ShoeDetailsComponent} from './shoes/shoe-details/shoe-details.component';
import {ShoeEditComponent} from './shoes/shoe-edit/shoe-edit.component';
import {ShoeItemComponent} from './shoes/shoe-list/shoe-item/shoe-item.component';
import {WishListComponent} from './wish-list/wish-list.component';
import {WishEditComponent} from './wish-list/wish-edit/wish-edit.component';
import {AppDropdownDirective} from './shared/app-dropdown.directive';
import {ShoesService} from './shoes/shoes.service';
import {AppRoutingModule} from './app-routing.module';
import {ShoeStartComponent} from './shoes/shoe-start/shoe-start.component';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth-guard.service';
import {HttpModule} from '@angular/http';
import {ShoesStorageService} from './shoes/shoes-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoesComponent,
    ShoeListComponent,
    ShoeItemComponent,
    ShoeDetailsComponent,
    ShoeEditComponent,
    ShoeStartComponent,
    WishListComponent,
    WishEditComponent,
    AppDropdownDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoesService, AuthGuard, AuthService, ShoesStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
