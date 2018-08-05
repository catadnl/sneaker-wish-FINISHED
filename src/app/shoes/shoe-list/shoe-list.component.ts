import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Shoe} from '../model/shoe.model';
import {Color} from '../model/color.model';

@Component({
  selector: 'app-shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrls: ['./shoe-list.component.css']
})
export class ShoeListComponent implements OnInit {

  shoes: Shoe[];

  @Output() shoeWasSelected = new EventEmitter<Shoe>();

  ngOnInit() {
    this.shoes = [
      new Shoe('Air Max 97', 'Vintage air foam shoes by Nike',
        'https://sneakernews.com/wp-content/uploads/2017/08/skepta-nike-air-max-97-ultra-sk-release-date-01.jpg', 200,
        [new Color('cream white', 'midsole'), new Color('blue', 'foxing')]),
      new Shoe('Air Jordan 1', 'Classic basketball Jordan shoes',
        'http://www.collectedmag.com/images/large/jordan%201%20high%20og-661uat.jpg', 120,
        [new Color('dark blue', 'midsole'), new Color('black', 'foxing')]),
      new Shoe('Adidas Superstar', 'Timeless model with a new remake from Adidas Originals',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Adidas_Superstar_shoes_pair.jpg/1599px-Adidas_Superstar_shoes_pair.jpg',
        150, [new Color('white', 'midsole'), new Color('red', 'tongue')])
    ];

  }

  onShoeSelected(shoe: Shoe) {
    this.shoeWasSelected.emit(shoe);
  }
}
