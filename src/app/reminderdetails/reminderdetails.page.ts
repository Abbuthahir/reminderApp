import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { ReminderModalPage } from '../reminder-modal/reminder-modal.page';

@Component({
  selector: 'app-reminderdetails',
  templateUrl: './reminderdetails.page.html',
  styleUrls: ['./reminderdetails.page.scss'],
})
export class ReminderdetailsPage implements OnInit {
  reminderArr: any[] = [];
  datetime: any[] = [];
  showList: boolean = false;
  note: string = '';
  showIcon: boolean = false;

  constructor(private modalCtrl: ModalController, private routerOutlet: IonRouterOutlet) {
    const reminder: any = localStorage.getItem('reminderdetails');
    const reminderData = JSON.parse(reminder);
    this.reminderArr.push(reminderData)
    console.log('current reminder', this.reminderArr);
  }
  toggleList() {
    this.showList = !this.showList;
  }
  async goremindermodal() {
    localStorage.setItem('note', JSON.stringify(this.note));
    const modal = await this.modalCtrl.create({
      component: ReminderModalPage,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: {
        initialNote: this.note
      }
    }).then();
    await modal.present();
    const { data, role } = await modal.onDidDismiss();
    console.log('reminderData', data);
    this.datetime = [data]
    console.log('datetime', this.datetime);
  }
  toggleIcon() {
    this.showIcon = !!this.note; // Show the icon if 'note' has a value
  }
  // saveToLocalStorage() {
  //   localStorage.setItem('note', JSON.stringify(this.note));
  // }
  ngOnInit() {
   
  }

}
