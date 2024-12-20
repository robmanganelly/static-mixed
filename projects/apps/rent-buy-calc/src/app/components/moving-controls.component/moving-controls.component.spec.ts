import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovingControlsComponent } from './moving-controls.component';

describe('MovingControlsComponent', () => {
  let component: MovingControlsComponent;
  let fixture: ComponentFixture<MovingControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovingControlsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MovingControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
