import {Component} from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css'],
})
export class NamesComponent {
  names = ['Gica', 'Andrei', 'Alex'];
  // newName: string;
  newName = 'Catalin';
  namePlaceholder = 'New name..';
  isAddDisabled = false;

  onInputNewName(event: Event) {
    this.newName = (<HTMLInputElement>event.target).value;
  }

  onClickAddName() {
    this.names.push(this.newName);
    this.isAddDisabled = true;
  }

  getNewName() {
    if (this.names.length > 3) {
      return this.names[3];
    } else {
      return '';
    }
  }
}
