import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RampUnitComponent } from './ramp-unit.component';

describe('RampUnitComponent', () => {
  let component: RampUnitComponent;
  let fixture: ComponentFixture<RampUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RampUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RampUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
