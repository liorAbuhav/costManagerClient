import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddingFormsComponent } from './addding-forms.component';

describe('AdddingFormsComponent', () => {
  let component: AdddingFormsComponent;
  let fixture: ComponentFixture<AdddingFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddingFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddingFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
