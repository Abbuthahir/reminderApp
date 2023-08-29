import { Component } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items = [
    { name: 'Today', icon: 'calendar-number-outline', color: 'primary', selected: true },
    { name: 'Scheduled', icon: 'calendar', color: 'danger', selected: true },
    { name: 'All', icon: 'file-tray', color: 'dark', selected: true },
    { name: 'Flagged', icon: 'flag-outline', color: 'warning', selected: true },
    { name: 'Completed', icon: 'checkmark', color: 'medium', selected: false },
    { name: 'Assigned', icon: 'person', color: 'success', selected: false }];
  editing: boolean = false;
  selectedItems: any[] = this.items.filter(item => item.selected);
  activeSegment = 'newlist';
  colors: string[] = [
    'red', 'orange', '#FFC300', '#32CD32', '#89CFF0', '#1E90FF',
    '#FFC300', '#FF5733', '#B65FCF', '#C70039', '#900C3F', '#581845', '#FF5733',
  ];
  colorChunks: string[][] = [];

  constructor() {
    this.colorChunks = this.chunkArray(this.colors, 7);
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
}
