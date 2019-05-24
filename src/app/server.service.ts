import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  baseUrl = "/api/";
  _token = "csbceyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1MjQyIiwiZXhwIjoxNTU0NTU2NjQ2fQ.Xf1w4lApb8E6R6XiOG08jYXPy7PvXvAcm4Ka2Sms5aW3_gyhrqTL-uEIi-vK7fgqht384Co9Wj6PXbtVwtQm8w";

  constructor(private http: HttpClient) { }

  setToken(token:string){
    this._token = token;
  }

  getRequestOptions(){
    return {headers: new HttpHeaders().set('Authorization', this._token)};
  }

  getGroupsList(){
    return this.http.get(this.baseUrl+"groups/", this.getRequestOptions());
  }

  getSubjectsList(){
    return this.http.get(this.baseUrl+"subjects/", this.getRequestOptions());
  }

  getTeachersList(){
    return this.http.get(this.baseUrl+"teachers/", this.getRequestOptions());
  }

  getAudiencesList(){
    return this.http.get(this.baseUrl+"audiences/", this.getRequestOptions());
  }

  sendSubstitution(substitution: any){
    console.log(substitution);
    return this.http.post(this.baseUrl+"redactors/", substitution, this.getRequestOptions()).subscribe(res=>{
      console.log(res);
    });
  }
}
