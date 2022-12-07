import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: './newuser.component.css',
})
export class NewuserComponent {
  EnterName: string = 'Enter Name';
  EnterAge: string = 'Enter Age';

  users: { name: string; age: number }[] = [];
  inputAge;
  onClick(inputName: string, inputAge: number) {
    if (inputName == '') {
      alert('Name is required');
    } else if (!inputAge) {
      alert('Age is required');
    } else {
      this.users.push({ name: inputName, age: inputAge });
    }
  }
}
