import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, ItemReorderEventDetail, ModalController } from '@ionic/angular';
import { MyListService } from '../my-list.service';
import { NewReminderPage } from '../new-reminder/new-reminder.page';
import { LocalNotifications, ScheduleOptions } from '@capacitor/local-notifications';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {



  items = [
    { name: 'Today', icon: 'calendar-number-outline', color: 'primary', selected: true },
    { name: 'Scheduled', icon: 'calendar', color: 'danger', selected: true },
    { name: 'All', icon: 'file-tray', color: 'dark', selected: false },
    { name: 'Flagged', icon: 'flag-outline', color: 'warning', selected: true },
    { name: 'Completed', icon: 'checkmark', color: 'medium', selected: true },
    { name: 'Assigned', icon: 'person', color: 'success', selected: false }];
  editing: boolean = false;
  selectedItems: any[] = this.items.filter(item => item.selected);
  activeSegment = 'newlist';
  selectedColor: string = '#1E90FF';
  selectedIcon: string = 'list';
  selectedListType: string = 'standard';
  selectedListTypeIcon: string = 'list';
  inputValue: string = '';
  reminderlists: any[] = [];
  dummylist: any[] = [];
  colors: string[] = [
    'red', 'orange', '#FFC300', '#32CD32', '#89CFF0', '#1E90FF',
    '#7C37CC', '#FF5733', '#B65FCF', '#BF946F', '#777B7E', '#E4C7B7'
  ];
  colorChunks: string[][] = [];

  listIcons: any = ['list', 'bookmark', 'pin', 'gift', 'school', 'document', 'walk',
    'thermometer', 'book', 'card', 'barbell', 'restaurant', 'wine', 'git-network-outline', 'home', 'business',
    'tv-outline', 'musical-notes', 'game-controller', 'headset', 'leaf',];

  constructor(private modalController: ModalController, private router: Router,
     private mylistservice: MyListService, private routerOutlet: IonRouterOutlet) {

    this.mylistservice.getProgrammingLanguages().subscribe(
      (res: any) => {
        this.dummylist = this.dummylist.concat(res.data);
        this.reminderlists = this.reminderlists.concat(this.dummylist);
        console.log('response', this.reminderlists);

      }
    )

    const getMyList: any = localStorage.getItem('myLists');
    const data = JSON.parse(getMyList);
    if (data) {
      data.forEach((get: any) => {
        this.reminderlists.push(get)
      });
    }


    this.colorChunks = this.chunkArray(this.colors, 7);
  }
  selectColor(color: string) {
    this.selectedColor = color;
  }
  selectIcon(icon: string) {
    this.selectedIcon = icon;
  }
  private chunkArray(array: any[], size: number): any[][] {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }
  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    ev.detail.complete();
  }

  toggleEditMode() {
    this.editing = !this.editing;
    if (!this.editing) {
      this.selectedItems = this.items.filter(item => item.selected)
    } else {
      this.selectedItems = [];
    }
    console.log('selected', this.selectedItems);
  }
  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }
  updateListType() {
    switch (this.selectedListType) {
      case 'standard':
        this.selectedListTypeIcon = 'list';
        break;
      case 'shopping':
        this.selectedListTypeIcon = 'cart';
        break;
      case 'smartlist':
        this.selectedListTypeIcon = 'filter-circle-outline';
        break;
      default:
        this.selectedListTypeIcon = 'list';
        break;
    }
  }
  async storeDataInLocalStorage() {
    const data = {
      selectedColor: this.selectedColor,
      selectedIcon: this.selectedIcon,
      inputValue: this.inputValue,
    };

    let myList = JSON.parse(localStorage.getItem('myLists') || '[]');
    myList.push(data);
    localStorage.setItem('myLists', JSON.stringify(myList));
    console.log(myList);
    this.mylistservice.createProduct(data).subscribe(resp => console.log(resp)
    )
    await this.modalController.dismiss();

  }

  async toRemoveList(inputValue: any) {
    await this.mylistservice.removeProduct(inputValue).subscribe(res => console.log(res));

  }
  async newListmodal() {
    const modal = await this.modalController.create({
      component: NewReminderPage,
      presentingElement: this.routerOutlet.nativeEl

    });
    await modal.present();
  }
  // async openEmojiPicker() {
  //   const modal = await this.modalController.create({
  //     component: EmojiPickerModalPage,
  //   });

  //   await modal.present();

  //   const { data } = await modal.onWillDismiss();
  //   if (data && data.selectedEmoji) {
  //     this.selectedIcon = data.selectedEmoji;
  //     console.log('emoji', data);

  //   }
  // }

  goReminderDetails(data: any) {
    localStorage.setItem('reminderdetails', JSON.stringify(data));
    console.log('reminderData', data);
    this.router.navigate(['/reminderdetails'])
  }

  async scheduleNotification(){
    let options: ScheduleOptions = {
      notifications:[{
        id: 111,
        title: "Reminder Notification",
        body: "My Reminder app"
      }]
    }
    try{
      LocalNotifications.schedule(options);
      console.log('localnotification',options);
      
    }
    catch (ex){
      alert(JSON.stringify(ex));
    }
  }

  ngOnInit(): void {

  }
}
