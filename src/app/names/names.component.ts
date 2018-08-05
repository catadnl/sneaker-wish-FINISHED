import {Component} from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css'],
})
export class NamesComponent {
  names = ['Gica', 'Andrei', 'Alex'];
  newName = '';
  namePlaceholder = 'New name..';
  shouldDisplayAlert = false;

  onClickAddName() {
    if (this.newName && this.newName.trim()) {
      this.names.push(this.newName);
    } else {
      this.shouldDisplayAlert = true;
    }
    this.newName = '';
  }

  getListBorder() {
    if (this.names.length > 3) {
      return '1px solid lightblue';
    }
    return 'initial';
  }

  onClickInput() {
    this.shouldDisplayAlert = false;
  }
}
