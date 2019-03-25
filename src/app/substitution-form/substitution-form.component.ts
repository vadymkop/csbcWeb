import {Component, OnInit} from '@angular/core';
import {Substitution} from '../model/substitution';

@Component({
  selector: 'app-substitution-form',
  templateUrl: './substitution-form.component.html',
  styleUrls: ['./substitution-form.component.css']
})
export class SubstitutionFormComponent implements OnInit {

  groups = ['er4', 'rag2', 'ergea4', '2ar', 'age4', 'rag2',
    'ergea4', '2ar', 'age4', 'rag2', 'ergea4', '2ar', 'age4',
    'rag2', 'ergea4', '2ar', 'age4', 'rag2', 'ergea4', '2ar', 'age4',
    'rag2', 'ergea4', '2ar', 'age4'];
  lessons = ['er4', 'rag2', 'ergea4', '2ar', 'age4'];
  teachers = ['er4', 'rag2', 'ergea4', '2ar', 'age4'];
  audiences = ['er4', 'rag2', 'ergea4', '2ar', 'age4'];
  subjectNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

  substitutionObj = {
    activationDate: null,
    subjectNumber: 1,
    disabledSubject: false,
    groups:[],
    subjectName: null,
    teacher: null,
    audience: null
  };

  constructor() {
    this.onAddGroup();
  }

  ngOnInit() {
  }

  onAddGroup() {
    this.substitutionObj.groups.push(
      {
        name: "",
        subgroup:{
          a:true,
          b:true
        }
      }
    );
    console.dir(this.substitutionObj);
  }

  onDeleteGroup(group: any) {
    this.substitutionObj.groups.pop();
  }

  onSubmit(){
    console.dir(this);
  }
}
