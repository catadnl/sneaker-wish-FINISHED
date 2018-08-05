import {Component, OnInit} from '@angular/core';
import {Shoe} from '../model/shoe.model';
import {ShoesService} from '../shoes.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-shoe-details',
  templateUrl: './shoe-details.component.html',
  styleUrls: ['./shoe-details.component.css']
})
export class ShoeDetailsComponent implements OnInit {

  shoe: Shoe;

  id: number;

  constructor(private shoesService: ShoesService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.shoe = this.shoesService.getShoe(this.id);
      }
    );
  }

  onEditShoe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteShoe() {
    this.shoesService.deleteShoe(this.id);
    this.router.navigate(['/shoes']);
  }


  onAddToWishList() {
    this.shoesService.addToWishList(this.shoe);
  }
}
