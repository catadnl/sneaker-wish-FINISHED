import {Component} from '@angular/core';
import {ShoesStorageService} from '../shoes/shoes-storage.service';
import {ShoesService} from '../shoes/shoes.service';
import {Shoe} from '../shoes/model/shoe.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private shoesStorageService: ShoesStorageService, private shoesService: ShoesService) {
  }

  onSaveData() {
    this.shoesStorageService.storeShoes()
      .subscribe(
        response => console.log(response),
        (error) => console.log(`An error occurred during saving the shoes data with cause ${error}`)
      );
  }

  onFetchData() {
    this.shoesStorageService.getShoes()
      .subscribe(
        (shoes: Shoe[]) => this.shoesService.setShoes(shoes),
        (error) => console.log(`An error occurred during getting the shoes data with cause ${error}`)
      );
  }
}
