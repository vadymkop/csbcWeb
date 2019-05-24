import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotValidLinkPageComponent } from './not-valid-link-page.component';

describe('NotValidLinkPageComponent', () => {
  let component: NotValidLinkPageComponent;
  let fixture: ComponentFixture<NotValidLinkPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotValidLinkPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotValidLinkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
