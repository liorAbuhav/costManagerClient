import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-costs-dialog',
  templateUrl: './costs-dialog.component.html',
  styleUrls: ['./costs-dialog.component.scss']
})
export class CostsDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {costs: any[]}) { }

  ngOnInit(): void {
  }

}
