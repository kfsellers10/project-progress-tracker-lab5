import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectCrud } from './project-crud';

describe('ProjectCrud', () => {
  let component: ProjectCrud;
  let fixture: ComponentFixture<ProjectCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCrud],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCrud);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
