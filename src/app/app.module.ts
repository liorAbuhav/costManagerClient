import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './components/homepage/homepage.component'
import { MaterialModule } from 'src/material/material.module';
import { CostsDialogComponent } from './components/costs-dialog/costs-dialog.component';
import { UsersExploreComponent } from './components/users-explore/users-explore.component';
import { DatesExploreComponent } from './components/dates-explore/dates-explore.component';
import { CategoriesExploreComponent } from './components/categories-explore/categories-explore.component';
import { UsersAndDatesExploreComponent } from './components/users-and-dates-explore/users-and-dates-explore.component';
import { AdddingFormsComponent } from './components/addding-forms/addding-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CostsDialogComponent,
    UsersExploreComponent,
    DatesExploreComponent,
    CategoriesExploreComponent,
    UsersAndDatesExploreComponent,
    AdddingFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
