import {Injectable} from '@angular/core';
import {ShoesService} from './shoes.service';
import {map} from 'rxjs/operators';
import {Http} from '@angular/http';

@Injectable()
export class ShoesStorageService {

  constructor(private http: Http, private shoesService: ShoesService) {
  }

  getShoes() {
    return this.http.get('https://angular-course-d5de1.firebaseio.com//shoes.json')
      .pipe(
        map((response: Response) => response.json())
      );
  }

  storeShoes() {
    const shoes = this.shoesService.getShoes();
    return this.http.put('https://angular-course-d5de1.firebaseio.com//shoes.json', shoes)
      .pipe();
  }

}
