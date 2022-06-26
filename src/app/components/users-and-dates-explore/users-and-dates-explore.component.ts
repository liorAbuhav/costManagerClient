import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { CostsDialogComponent } from '../costs-dialog/costs-dialog.component';

@Component({
  selector: 'app-users-and-dates-explore',
  templateUrl: './users-and-dates-explore.component.html',
  styleUrls: ['./users-and-dates-explore.component.scss']
})
export class UsersAndDatesExploreComponent implements OnInit {

  users: any[] = [];

  dateForm = this.fb.group({
    year: [null, [Validators.required, Validators.min(2000)]],
    month: [null, [Validators.required, Validators.max(12)]],
  });

  constructor(private fb: FormBuilder,
              private data: DataService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.data.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

  cardClick(clickedUser: any) {
    if (this.dateForm.valid) {
      this.data.getCostsByUserAndDate(this.dateForm.get('year')?.value, this.dateForm.get('month')?.value, clickedUser._id).subscribe(costs => {
        let dialogRef = this.dialog.open(CostsDialogComponent, {
          data: {costs: costs},
          height: '400px',
          width: '600px',
        });
      })
    }
  }

}
