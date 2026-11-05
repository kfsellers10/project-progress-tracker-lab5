import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechnologyChecklist } from './technology-checklist';

describe('TechnologyChecklist', () => {
  let component: TechnologyChecklist;
  let fixture: ComponentFixture<TechnologyChecklist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyChecklist],
    }).compileComponents();

    fixture = TestBed.createComponent(TechnologyChecklist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
