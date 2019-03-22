import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstitutionFormComponent } from './substitution-form.component';

describe('SubstitutionFormComponent', () => {
  let component: SubstitutionFormComponent;
  let fixture: ComponentFixture<SubstitutionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubstitutionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstitutionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
