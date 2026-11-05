import { Routes } from '@angular/router';
import { ProjectCrud } from './project-crud/project-crud';

export const routes: Routes = [

  // Display the project form and all projects on one page
  {
    path: 'projects',
    component: ProjectCrud
  }

];