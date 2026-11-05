import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MilestoneApi } from './milestone-api';

describe('MilestoneApi', () => {
  let component: MilestoneApi;
  let fixture: ComponentFixture<MilestoneApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MilestoneApi],
    }).compileComponents();

    fixture = TestBed.createComponent(MilestoneApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
