import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { CostsDialogComponent } from '../costs-dialog/costs-dialog.component';

@Component({
  selector: 'app-users-explore',
  templateUrl: './users-explore.component.html',
  styleUrls: ['./users-explore.component.scss']
})
export class UsersExploreComponent implements OnInit {

  users: any[] = [];

  constructor(private data: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.data.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

  cardClick(clickedUser: any) {
    this.data.getCostsByUserId(clickedUser._id).subscribe(costs => {
      let dialogRef = this.dialog.open(CostsDialogComponent, {
        data: {costs: costs},
        height: '400px',
        width: '600px',
      });
    })
  }

}
