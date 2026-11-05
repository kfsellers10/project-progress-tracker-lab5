import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project, ProjectInput } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectApi {

  // Access Angular HttpClient
  private http = inject(HttpClient);

  // Express backend API URL
  private apiUrl = 'http://localhost:8001/projects';

  // GET: Retrieve all projects
  getProjects() {
    return this.http.get<Project[]>(this.apiUrl);
  }

  // GET: Retrieve one project
  getProject(id: string) {
    return this.http.get<Project>(
      `${this.apiUrl}/${id}`
    );
  }

  // POST: Create a project
  addProject(project: ProjectInput) {
    return this.http.post<Project>(
      this.apiUrl,
      project
    );
  }

  // PUT: Update a project
  updateProject(
    id: string,
    project: Partial<ProjectInput>
  ) {
    return this.http.put<Project>(
      `${this.apiUrl}/${id}`,
      project
    );
  }

 // DELETE: Remove a project
  deleteProject(id: string) {
    return this.http.delete(
      `${this.apiUrl}/${id}`
    );
  }
}
