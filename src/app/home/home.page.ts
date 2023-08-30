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
  colors: string[] = [
    'red', 'orange', '#FFC300', '#32CD32', '#89CFF0', '#1E90FF',
    '#7C37CC', '#FF5733', '#B65FCF', '#BF946F', '#777B7E', '#E4C7B7'
  ];
  colorChunks: string[][] = [];

  listIcons: any = ['list', 'bookmark', 'pin', 'gift', 'school', 'document', 'walk',
    'thermometer', 'book', 'card', 'barbell', 'restaurant', 'wine', 'git-network-outline', 'home', 'business',
    'tv-outline', 'musical-notes', 'game-controller', 'headset', 'leaf',];

  constructor() {
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
}
