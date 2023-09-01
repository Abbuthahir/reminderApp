import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewReminderPageRoutingModule } from './new-reminder-routing.module';

import { NewReminderPage } from './new-reminder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewReminderPageRoutingModule
  ],
  declarations: [NewReminderPage]
})
export class NewReminderPageModule {}
