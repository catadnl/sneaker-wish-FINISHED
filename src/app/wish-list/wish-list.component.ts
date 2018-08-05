import {Component, OnDestroy, OnInit} from '@angular/core';
import {Wish} from './model/wish.model';
import {WishService} from './wish.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit, OnDestroy {

  wishList: Wish[];

  subscription: Subscription;

  constructor(private wishService: WishService) {
  }

  ngOnInit() {
    this.wishList = this.wishService.getWishList().slice();
    this.subscription = this.wishService.wishListChanged.subscribe(
      (newWishList) => this.wishList = newWishList
    );
  }

  onNewWishAdded(wish: Wish) {
    this.wishService.addWish(wish);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onEditItem(id: number) {
    this.wishService.editStarted.next(id);
  }

}
