import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeacherCardComponent } from './teacher-card/teacher-card.component';
import { SubstitutionFormComponent } from './substitution-form/substitution-form.component';
import {MaterialModule} from './material-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import { NotValidLinkPageComponent } from './not-valid-link-page/not-valid-link-page.component';

const appRoutes: Routes = [
  { path: 'substitutions/:token', component: SubstitutionFormComponent },
  { path: 'not-valid-token', component: NotValidLinkPageComponent },
  { path: '', component: NotValidLinkPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TeacherCardComponent,
    SubstitutionFormComponent,
    NotValidLinkPageComponent,

  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
