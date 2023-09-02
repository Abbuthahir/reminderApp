import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActionSheetController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reminder-modal',
  templateUrl: './reminder-modal.page.html',
  styleUrls: ['./reminder-modal.page.scss'],
})
export class ReminderModalPage implements OnInit {
  maxDate!: string;
  reminderForm!: FormGroup;
  reminderName: any;
  constructor(private modalCtrl: ModalController ,private actionSheetCtrl: ActionSheetController) { 
    this.reminderForm = new FormGroup({
      date: new FormControl(),
      time: new FormControl()
    });
    console.log('reminderForm', this.reminderForm);

    const note: any = localStorage.getItem('note'); 
    this.reminderName = JSON.parse(note);
    console.log('reminderName', this.reminderName);
    
    
  }

  dismissModal(){
    this.modalCtrl.dismiss({date:this.reminderForm.value.date, time:this.reminderForm.value.time});
    console.log('abcd',{date:this.reminderForm.value.date, time:this.reminderForm.value.time});
  }
  // canDismiss = async () => {
  //   const actionSheet = await this.actionSheetCtrl.create({
  //     buttons: [
  //       {
  //         text: 'Discard Changes',
  //         role: 'confirm',
  //       },
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //       },
  //     ],
  //   });

  //   actionSheet.present();

  //   const { role } = await actionSheet.onWillDismiss();

  //   return role === 'confirm';
  // };
  ngOnInit() {
  }

}
