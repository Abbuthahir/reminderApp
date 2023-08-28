import { Component } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items = [
    { name: 'Today', icon:'calendar-number-outline', color: 'primary', selected: false  },
    { name: 'Scheduled', icon:'calendar', color: 'danger',  selected: false },
    { name: 'All', icon: 'file-tray', color: 'dark',  selected: false },
    { name: 'Flagged', icon: 'flag-outline', color: 'warning',  selected: false },
    { name: 'Completed', icon:'checkmark', color:'gray',  selected: false } ];
  editing: boolean = false;
  selectedItems: any[] = [];
 


  constructor() { }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    ev.detail.complete();
  }
  toggleSelection(index: number) {
    this.items[index].selected = !this.items[index].selected;
  }
  toggleEditMode() {
    if (this.editing) {
      // If exiting edit mode, store selected items
      this.selectedItems = this.items.filter(item => item.selected);

    }
    this.editing = !this.editing;
    console.log('selected', this.selectedItems);
  }

}
