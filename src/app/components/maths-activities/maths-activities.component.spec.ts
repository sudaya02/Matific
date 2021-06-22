import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathsActivitiesComponent } from './maths-activities.component';

describe('MathsActivitiesComponent', () => {
  let component: MathsActivitiesComponent;
  let fixture: ComponentFixture<MathsActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathsActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathsActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
