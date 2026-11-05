import {
  Component,
  OnInit,
  inject,
  ChangeDetectorRef
} from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { ProjectApi } from '../project-api';
import { Project } from '../project';

@Component({
  selector: 'app-project-crud',
  imports: [ReactiveFormsModule],
  templateUrl: './project-crud.html',
  styleUrl: './project-crud.css'
})
export class ProjectCrud implements OnInit {

  // Access Angular services
  private fb = inject(FormBuilder);
  private projectApi = inject(ProjectApi);
  private cdr = inject(ChangeDetectorRef);

  // Store projects retrieved from MongoDB
  projects: Project[] = [];

  // Store the project ID when editing (null means adding a new project)
  projectId: string | null = null;

  // Define the reactive form
  projectForm = this.fb.nonNullable.group({
    projectName: ['', Validators.required],
    description: ['', Validators.required],
    startDate: ['', Validators.required],
    status: ['Not Started', Validators.required],
    teamMember: ['', Validators.required],
    progressNote: ['']
  });

  // Load projects when the component starts
  ngOnInit() {
    this.loadProjects();
  }

  // GET: Retrieve all projects
  loadProjects() {
    this.projectApi.getProjects().subscribe({
      next: data => {
        this.projects = data;
        this.cdr.detectChanges();
      },
      error: err => {
        console.error('Error loading projects:', err);
      }
    });
  }

  // Add a new project or update an existing project
  onSubmit() {

    // Check form validation
    if (this.projectForm.invalid) return;

    const projectData = this.projectForm.getRawValue();

    if (this.projectId) {

      // PUT: Update existing project
      this.projectApi.updateProject(this.projectId, projectData)
        .subscribe({
          next: () => {
            console.log('Project updated successfully');
            this.resetForm();
            this.loadProjects();
          },
          error: err => {
            console.error('Update failed:', err);
          }
        });

    } else {

      // POST: Create new project
      this.projectApi.addProject(projectData)
        .subscribe({
          next: () => {
            console.log('Project saved successfully');
            this.resetForm();
            this.loadProjects();
          },
          error: err => {
            console.error('Save failed:', err);
          }
        });
    }
  }

  // Fill the form with the selected project so it can be edited
  onEdit(project: Project) {
    this.projectId = project._id;

    this.projectForm.patchValue({
      projectName: project.projectName,
      description: project.description,
      startDate: project.startDate.substring(0, 10),
      status: project.status,
      teamMember: project.teamMember,
      progressNote: project.progressNote
    });
  }

  // Stop editing and clear the form
  onCancel() {
    this.resetForm();
  }

  // DELETE: Remove the selected project
  onDelete(projectId: string) {
    this.projectApi.deleteProject(projectId)
      .subscribe({
        next: () => {

          // Remove deleted project from the list
          this.projects = this.projects.filter(
            project => project._id !== projectId
          );

          // If this project was being edited, clear the form
          if (this.projectId === projectId) {
            this.resetForm();
          }

          this.cdr.detectChanges();
        },
        error: err => {
          console.error('Delete failed:', err);
        }
      });
  }

  // Clear the form and go back to "add" mode
  private resetForm() {
    this.projectId = null;
    this.projectForm.reset();
  }
}