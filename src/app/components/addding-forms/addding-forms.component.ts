import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/data.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-addding-forms',
  templateUrl: './addding-forms.component.html',
  styleUrls: ['./addding-forms.component.scss']
})
export class AdddingFormsComponent implements OnInit {

  newUserForm = this.fb.group({
    id: [null, [Validators.required]],
    first_name: [null, [Validators.required]],
    last_name: [null, [Validators.required]],
    birthday: [null, [Validators.required]],
    marital_status: [null, [Validators.required]],
  });

  newCostForm = this.fb.group({
    user_id: [null, [Validators.required]],
    description: [null, [Validators.required]],
    category: [null, [Validators.required]],
    sum: [null, [Validators.required]],
    date: [null, [Validators.required]],
  });

  constructor(private fb: FormBuilder, private data: DataService, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  submitUser() {
    this.data.createUser(this.newUserForm.value).subscribe(res => {
      if(res && res._id) {
        this.snack.openFromComponent(SnackbarComponent, {
          duration: 3000,
        });    
       }
    })
  }

  submitCost() {
    this.data.createCost(this.newCostForm.value).subscribe(res => {
      if(res && res._id) {
        this.snack.openFromComponent(SnackbarComponent, {
          duration: 3000,
        });     
       }
    })
  }

}
