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
  subjectNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

  disabledSubject = false;

  activationDate = null;
  substitutionObj = {
    activationDate: this.activationDate,
    subjectNumber: 1,
    groups: [
      {
        name: null,
        subgroup: {
          a: true,
          b: true
        }
      }
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

  onAddGroup() {
    this.substitutionObj.groups.push(
      {
        name: null,
        subgroup: {
          a: true,
          b: true
        }
      }
    );
    console.dir(this.substitutionObj);
  }

  onDeleteGroup(group: any) {
    this.substitutionObj.groups.pop();
  }
}
