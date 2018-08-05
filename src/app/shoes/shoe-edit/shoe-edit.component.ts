import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ShoesService} from '../shoes.service';

@Component({
  selector: 'app-shoe-edit',
  templateUrl: './shoe-edit.component.html',
  styleUrls: ['./shoe-edit.component.css']
})
export class ShoeEditComponent implements OnInit {

  id: number;
  shoeForm: FormGroup;

  editMode = false;

  constructor(private route: ActivatedRoute, private router: Router, private shoesService: ShoesService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.shoesService.updateShoe(this.id, this.shoeForm.value);
    } else {
      this.shoesService.addShoe(this.shoeForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let shoeName = '';
    let shoeImagePath = '';
    let shoeDescription = '';

    if (this.editMode) {
      const shoe = this.shoesService.getShoe(this.id);
      shoeName = shoe.name;
      shoeImagePath = shoe.imagePath;
      shoeDescription = shoe.description;
    }

    this.shoeForm = new FormGroup({
      'name': new FormControl(shoeName, Validators.required),
      'imagePath': new FormControl(shoeImagePath, Validators.required),
      'description': new FormControl(shoeDescription, Validators.required)
    });
  }

}
