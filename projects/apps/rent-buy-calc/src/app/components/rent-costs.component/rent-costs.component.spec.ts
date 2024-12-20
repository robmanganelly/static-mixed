import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RentCostsComponent } from './rent-costs.component';

describe('RentCostsComponent', () => {
  let component: RentCostsComponent;
  let fixture: ComponentFixture<RentCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentCostsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RentCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
