import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-progress-notes',
  styleUrl: './progress-notes.css',
  templateUrl: './progress-notes.html',
})
export class ProgressNotes {
  progressForm = new FormGroup({
    projectCode: new FormControl(''),
  projectName: new FormControl(''),
    date: new FormControl(''),
    currentStatus: new FormControl(''),
    teamMember: new FormControl(''),
    progressNote: new FormControl('')
  });

  projectCodes: { [code: string]: string } = {
    PPT101: 'Project Progress Tracker',
    WEB202: 'Website Redesign',
    APP303: 'Mobile Application Development',
    DATA404: 'Data Analytics Dashboard'
  };

  getProjectName(code: string): string | undefined {
    return this.projectCodes[code.trim().toUpperCase()];
  }

  projectCodeMessage = '';

  onProjectCodeChange() {
    const code = this.progressForm.value.projectCode ?? '';
    const name = this.getProjectName(code);

    if (name) {
      this.progressForm.patchValue({ projectName: name });
      this.projectCodeMessage = '';
    } else {
      this.projectCodeMessage = 'Project code not found.';
    }
  }
}