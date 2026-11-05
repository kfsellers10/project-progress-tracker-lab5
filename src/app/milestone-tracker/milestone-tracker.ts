import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-milestone-tracker',
  styleUrl: './milestone-tracker.css',
  templateUrl: './milestone-tracker.html',
})
export class MilestoneTracker {
  milestoneForm = new FormGroup({
    milestoneName: new FormControl(''),
    dueDate: new FormControl(''),
    status: new FormControl(''),

    details: new FormGroup({
      owner: new FormControl(''),
      notes: new FormControl('')
    })
  });
}