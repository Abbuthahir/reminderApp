import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReminderdetailsPage } from './reminderdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ReminderdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReminderdetailsPageRoutingModule {}
