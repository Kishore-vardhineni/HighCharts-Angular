import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighChartsDrilldownComponent } from './high-charts-drilldown.component';

describe('HighChartsDrilldownComponent', () => {
  let component: HighChartsDrilldownComponent;
  let fixture: ComponentFixture<HighChartsDrilldownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighChartsDrilldownComponent]
    });
    fixture = TestBed.createComponent(HighChartsDrilldownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
