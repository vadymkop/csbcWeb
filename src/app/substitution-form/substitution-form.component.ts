import {Component, OnInit} from '@angular/core';
import {ServerService} from '../server.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DateAdapter} from '@angular/material';

@Component({
  selector: 'app-substitution-form',
  templateUrl: './substitution-form.component.html',
  styleUrls: ['./substitution-form.component.css']
})
export class SubstitutionFormComponent implements OnInit {

  groups = [];
  subjects = [];
  teachers = [];
  audiences = [];
  subjectNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
  activationDate = new Date();

  substitutionObj = {
    activationDate: this.get_date(),
    lessonNumber: 1,
    disabledSubject: false,
    groups:[],
    subject: null,
    teacher: null,
    audience: null
  };

  formSended = false;

  constructor(private service:ServerService,
              private route: ActivatedRoute,
              private router: Router,
              private adapter: DateAdapter<any>) {
    this.onAddGroup();
    let token = this.route.snapshot.paramMap.get("token");
    service.setToken(token);
    this.updateLists();
    this.adapter.setLocale('fr');
  }

  ngOnInit() {
  }

  onAddGroup() {
    this.substitutionObj.groups.push(
      {
        name: "",
        a:true,
        b:true
      }
    );
    console.dir(this.substitutionObj);
  }

  onDeleteGroup(group: any) {
    this.substitutionObj.groups.pop();
  }

  onSubmit(){
    this.service.sendSubstitution(this.substitutionObj);
    this.formSended = true;
  }

  get_date(){
    return this.activationDate.getTime();
  }

  updateLists(){
    this.updateGroupsList();
    this.updateSubjectsList();
    this.updateTeachersList();
    this.updateAudiencesList();
  }

  updateGroupsList(){
    this.service.getGroupsList().subscribe((res: any)=>{
      console.log(res);
      this.groups = res;
    }, (error: any)=>{
      console.log(error);
      this.router.navigate(['not-valid-token/']);
    });
  }

  updateSubjectsList(){
    this.service.getSubjectsList().subscribe((res: any)=>{
      console.log(res);
      this.subjects = res;
    });
  }

  updateTeachersList(){
    this.service.getTeachersList().subscribe((res: any)=>{
      console.log(res);
      this.teachers = res;
    });
  }

  updateAudiencesList(){
    this.service.getAudiencesList().subscribe((res: any)=>{
      console.log(res);
      this.audiences = res;
    });
  }
}
