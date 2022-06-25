import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAndDatesExploreComponent } from './users-and-dates-explore.component';

describe('UsersAndDatesExploreComponent', () => {
  let component: UsersAndDatesExploreComponent;
  let fixture: ComponentFixture<UsersAndDatesExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersAndDatesExploreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersAndDatesExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
