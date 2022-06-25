import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersExploreComponent } from './users-explore.component';

describe('UsersExploreComponent', () => {
  let component: UsersExploreComponent;
  let fixture: ComponentFixture<UsersExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersExploreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
