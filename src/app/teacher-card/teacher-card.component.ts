import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-teacher-card',
  templateUrl: './teacher-card.component.html',
  styleUrls: ['./teacher-card.component.css']
})
export class TeacherCardComponent implements OnInit {

  teacher = {
    surname: 'Yakiys',
    firstName: 'Nikola',
    lastName: 'Pobatkovy'
  };

  constructor() {
  }

  ngOnInit() {
  }

  getFullName() {
    return this.teacher.surname + ' ' + this.teacher.firstName + ' ' + this.teacher.lastName;
  }
}
