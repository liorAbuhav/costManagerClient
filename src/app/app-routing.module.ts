import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddingFormsComponent } from './components/addding-forms/addding-forms.component';
import { CategoriesExploreComponent } from './components/categories-explore/categories-explore.component';
import { DatesExploreComponent } from './components/dates-explore/dates-explore.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UsersAndDatesExploreComponent } from './components/users-and-dates-explore/users-and-dates-explore.component';
import { UsersExploreComponent } from './components/users-explore/users-explore.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'users', component: UsersExploreComponent },
  { path: 'users-and-dates', component: UsersAndDatesExploreComponent },
  { path: 'dates', component: DatesExploreComponent },
  { path: 'categories', component: CategoriesExploreComponent },
  { path: 'add', component: AdddingFormsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
