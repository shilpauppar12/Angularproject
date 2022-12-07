import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-peopleadded',
  templateUrl: './peopleadded.component.html',
  styleUrls: ['./peopleadded.component.css'],
})
export class PeopleaddedComponent implements OnInit {
  // name : string = 'shilpa'
  // @Input () myDataArray : any []=[]
  users: any = [
    { id: '01', name: 'Thomas', age: '28' },
    { id: '02', name: 'Diana', age: '16' },
    { id: '03', name: 'Leo', age: '23' },
    { id: '04', name: 'Harry', age: '17' },
    { id: '05', name: 'Jack', age: '22' },
    { id: '06', name: 'Max', age: '18' },
    { id: '07', name: 'Peter', age: '33' },
    { id: '08', name: 'Sofia', age: '13' },
    { id: '09', name: 'Edward', age: '29' },
    { id: '10', name: 'Charlie', age: '11' },
  ];
  ngOnInit() {
    console.log(this.users);
  }
  @Input() myDataArray: any[] = [];
  abc = 'border';
}
