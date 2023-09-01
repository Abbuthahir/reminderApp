import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewReminderPage } from './new-reminder.page';

const routes: Routes = [
  {
    path: '',
    component: NewReminderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewReminderPageRoutingModule {}
