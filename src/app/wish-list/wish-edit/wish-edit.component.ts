import {Component, OnDestroy, OnInit} from '@angular/core';
import {Wish} from '../model/wish.model';
import {Shoe} from '../../shoes/model/shoe.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {WishService} from '../wish.service';

@Component({
  selector: 'app-wish-edit',
  templateUrl: './wish-edit.component.html',
  styleUrls: ['./wish-edit.component.css']
})
export class WishEditComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  id: number;

  editMode = false;

  wishForm: FormGroup;

  constructor(private wishService: WishService) {
  }

  ngOnInit() {
    this.subscription = this.wishService.editStarted.subscribe(
      (id: number) => {
        this.editMode = true;
        this.id = id;

        const wish: Wish = this.wishService.getWish(id);
        this.wishForm.setValue({
          name: wish.shoe.name,
          quantity: wish.quantity
        });
      }
    );

    this.initForm();
  }


  onSubmit() {
    const shoe: Shoe = new Shoe(this.wishForm.get('name').value, '', '', 0, []);
    const wish: Wish = new Wish(shoe, this.wishForm.get('quantity').value);

    if (this.editMode) {
      this.wishService.updateWish(this.id, wish);
    } else {
      this.wishService.addWish(wish);
    }
    this.editMode = false;
    this.wishForm.reset();
  }

  onDelete() {
    this.wishService.deleteWish(this.id);
    this.onClear();
  }

  onClear() {
    this.wishForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private initForm() {
    this.wishForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'quantity': new FormControl('', Validators.required)
    });
  }

}
