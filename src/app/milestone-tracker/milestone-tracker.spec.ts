import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MilestoneTracker } from './milestone-tracker';

describe('MilestoneTracker', () => {
  let component: MilestoneTracker;
  let fixture: ComponentFixture<MilestoneTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MilestoneTracker],
    }).compileComponents();

    fixture = TestBed.createComponent(MilestoneTracker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
