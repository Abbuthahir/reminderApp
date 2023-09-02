import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'new-reminder',
    loadChildren: () => import('./new-reminder/new-reminder.module').then( m => m.NewReminderPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'reminderdetails',
    loadChildren: () => import('./reminderdetails/reminderdetails.module').then( m => m.ReminderdetailsPageModule)
  },
  {
    path: 'reminder-modal',
    loadChildren: () => import('./reminder-modal/reminder-modal.module').then( m => m.ReminderModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
