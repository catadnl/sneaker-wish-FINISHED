import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-shoe-edit',
  templateUrl: './shoe-edit.component.html',
  styleUrls: ['./shoe-edit.component.css']
})
export class ShoeEditComponent implements OnInit {

  id: number;

  editMode = false;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
        }
      );
  }

}
