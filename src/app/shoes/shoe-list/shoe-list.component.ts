import {Component, OnDestroy, OnInit} from '@angular/core';
import {Shoe} from '../model/shoe.model';
import {ShoesService} from '../shoes.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrls: ['./shoe-list.component.css']
})
export class ShoeListComponent implements OnInit, OnDestroy {

  shoesSubscription: Subscription;

  shoes: Shoe[];

  constructor(private shoesService: ShoesService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.shoes = this.shoesService.getShoes();

    this.shoesSubscription = this.shoesService.shoesChanged.subscribe(
      (shoes: Shoe[]) => {
        this.shoes = shoes;
      }
    );
  }

  onNewShoe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.shoesSubscription.unsubscribe();
  }
}



