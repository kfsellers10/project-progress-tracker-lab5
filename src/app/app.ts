import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MilestoneTracker } from './milestone-tracker/milestone-tracker';
import { ProgressNotes } from './progress-notes/progress-notes';
import { ProjectOverview } from './project-overview/project-overview';
import { TechnologyChecklist } from './technology-checklist/technology-checklist';
import { MilestoneApi } from './milestone-api/milestone-api';

@Component({
imports: [MilestoneTracker, ProgressNotes, ProjectOverview, TechnologyChecklist, MilestoneApi, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('project-progress-tracker');
}
