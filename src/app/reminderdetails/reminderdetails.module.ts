import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReminderdetailsPageRoutingModule } from './reminderdetails-routing.module';

import { ReminderdetailsPage } from './reminderdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReminderdetailsPageRoutingModule
  ],
  declarations: [ReminderdetailsPage]
})
export class ReminderdetailsPageModule {}
