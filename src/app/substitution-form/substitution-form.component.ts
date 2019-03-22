import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-substitution-form',
  templateUrl: './substitution-form.component.html',
  styleUrls: ['./substitution-form.component.css']
})
export class SubstitutionFormComponent implements OnInit {

  groups = ['er4', 'rag2', 'ergea4', '2ar', 'age4', 'rag2', 'ergea4', '2ar', 'age4', 'rag2', 'ergea4', '2ar', 'age4', 'rag2', 'ergea4', '2ar', 'age4', 'rag2', 'ergea4', '2ar', 'age4', 'rag2', 'ergea4', '2ar', 'age4'];
  lessons = ['er4', 'rag2', 'ergea4', '2ar', 'age4'];
  teachers = ['er4', 'rag2', 'ergea4', '2ar', 'age4'];
  audiences = ['er4', 'rag2', 'ergea4', '2ar', 'age4'];

  disabledSubject = false;

  constructor() {
  }

  ngOnInit() {
  }

}
