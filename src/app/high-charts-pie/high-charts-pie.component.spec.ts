import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighChartsPieComponent } from './high-charts-pie.component';

describe('HighChartsPieComponent', () => {
  let component: HighChartsPieComponent;
  let fixture: ComponentFixture<HighChartsPieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighChartsPieComponent]
    });
    fixture = TestBed.createComponent(HighChartsPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
