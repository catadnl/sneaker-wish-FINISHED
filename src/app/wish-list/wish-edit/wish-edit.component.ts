import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Wish} from '../model/wish.model';
import {Shoe} from '../../shoes/model/shoe.model';

@Component({
  selector: 'app-wish-edit',
  templateUrl: './wish-edit.component.html',
  styleUrls: ['./wish-edit.component.css']
})
export class WishEditComponent {

  @ViewChild('wishNameInput') wishNameInput: ElementRef;
  @ViewChild('wishQuantityInput') wishQuantityInput: ElementRef;

  @Output() newWishAdded = new EventEmitter<Wish>();

  onAddWish() {
    const name = this.wishNameInput.nativeElement.value;
    const quantity = this.wishQuantityInput.nativeElement.value;

    const shoe = new Shoe(name, '', '', 0, []);
    const wish = new Wish(shoe, quantity);

    this.newWishAdded.emit(wish);
  }
}
