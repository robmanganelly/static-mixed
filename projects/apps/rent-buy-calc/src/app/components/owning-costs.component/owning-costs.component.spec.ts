import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OwningCostsComponent } from './owning-costs.component';

describe('OwningCostsComponent', () => {
  let component: OwningCostsComponent;
  let fixture: ComponentFixture<OwningCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwningCostsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OwningCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
