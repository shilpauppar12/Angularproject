import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleaddedComponent } from './peopleadded.component';

describe('PeopleaddedComponent', () => {
  let component: PeopleaddedComponent;
  let fixture: ComponentFixture<PeopleaddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleaddedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleaddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
