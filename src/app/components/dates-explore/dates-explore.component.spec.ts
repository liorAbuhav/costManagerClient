import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesExploreComponent } from './dates-explore.component';

describe('DatesExploreComponent', () => {
  let component: DatesExploreComponent;
  let fixture: ComponentFixture<DatesExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatesExploreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatesExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
