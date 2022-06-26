import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/data.service';
import { CostsDialogComponent } from '../costs-dialog/costs-dialog.component';

@Component({
  selector: 'app-dates-explore',
  templateUrl: './dates-explore.component.html',
  styleUrls: ['./dates-explore.component.scss']
})
export class DatesExploreComponent implements OnInit {

  dateForm = this.fb.group({
    year: [0, [Validators.required, Validators.min(2000)]],
    month: [0, [Validators.required, Validators.max(12)]],
  });

  constructor(private fb: FormBuilder,
              private data: DataService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.dateForm.valid) {
      this.data.getCostsByDate(this.dateForm.get('year')?.value, this.dateForm.get('month')?.value).subscribe(costs => {
        let dialogRef = this.dialog.open(CostsDialogComponent, {
          data: {costs: costs},
          height: '400px',
          width: '600px',
        });
      })
    }
  }

}
