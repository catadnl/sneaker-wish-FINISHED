import {NgModule} from '@angular/core';

import {ShoesComponent} from './shoes/shoes.component';
import {ShoeDetailsComponent} from './shoes/shoe-details/shoe-details.component';
import {ShoeEditComponent} from './shoes/shoe-edit/shoe-edit.component';
import {WishListComponent} from './wish-list/wish-list.component';
import {RouterModule} from '@angular/router';
import {ShoeStartComponent} from './shoes/shoe-start/shoe-start.component';
import {AuthGuard} from './auth/auth-guard.service';


const routes = [
  {path: '', redirectTo: '/shoes', pathMatch: 'full'},

  {
    path: 'shoes', component: ShoesComponent, children: [
      {path: '', component: ShoeStartComponent},
      {path: 'new', component: ShoeEditComponent, canActivate: [AuthGuard]},
      {path: ':id', component: ShoeDetailsComponent},
      {path: ':id/edit', component: ShoeEditComponent, canActivate: [AuthGuard]}
    ]
  },

  {path: 'wish-list', component: WishListComponent},

  {path: '**', redirectTo: '/shoes', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
