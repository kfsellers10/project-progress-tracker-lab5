import { Component } from '@angular/core';

@Component({
  selector: 'app-technology-checklist',
  imports: [],
  templateUrl: './technology-checklist.html',
  styleUrl: './technology-checklist.css',
})
export class TechnologyChecklist {
  checklistComplete = false;
  buttonName = 'Mark Checklist Complete';
  hoverMessage = '';

  completeChecklist() {
    this.checklistComplete = true;
    this.buttonName = 'Checklist Completed';
  }

  showMessage() {
    this.hoverMessage = 'Review the checklist before marking it complete.';
  }
}