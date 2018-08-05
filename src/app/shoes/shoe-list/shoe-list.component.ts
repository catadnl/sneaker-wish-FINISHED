import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Shoe} from '../model/shoe.model';
import {ShoesService} from '../shoes.service';

@Component({
  selector: 'app-shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrls: ['./shoe-list.component.css']
})
export class ShoeListComponent implements OnInit {

  shoes: Shoe[];

  @Output() shoeWasSelected = new EventEmitter<Shoe>();

  constructor(private shoeService: ShoesService) {
  }

  ngOnInit() {
    this.shoes = this.shoeService.getShoes();
  }

  onShoeSelected(shoe: Shoe) {
    this.shoeWasSelected.emit(shoe);
  }
}
