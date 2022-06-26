import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { CostsDialogComponent } from '../costs-dialog/costs-dialog.component';

@Component({
  selector: 'app-categories-explore',
  templateUrl: './categories-explore.component.html',
  styleUrls: ['./categories-explore.component.scss']
})
export class CategoriesExploreComponent implements OnInit {

  categories: any[] = [];

  constructor(private data: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.data.getAllCategories().subscribe(categories => {
      this.categories = categories;
      console.log(this.categories);
    });
  }

  cardClick(clickedCat: any) {
    this.data.getCostsByUserCategory(clickedCat.name).subscribe(costs => {
      let dialogRef = this.dialog.open(CostsDialogComponent, {
        data: {costs: costs},
        height: '400px',
        width: '600px',
      });
    })
  }

}
