import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-reminder',
  templateUrl: './new-reminder.page.html',
  styleUrls: ['./new-reminder.page.scss'],
})
export class NewReminderPage implements OnInit {

  constructor(private modalCtrl: ModalController, private router: Router) { }
  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }
  ngOnInit() {
  }
  async closeModal() {
    await this.modalCtrl.dismiss();
  }
  detail() {
    this.router.navigate(['/details']);  
    this.modalCtrl.dismiss();
  }
}
