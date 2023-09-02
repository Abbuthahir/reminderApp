import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReminderdetailsPage } from './reminderdetails.page';

describe('ReminderdetailsPage', () => {
  let component: ReminderdetailsPage;
  let fixture: ComponentFixture<ReminderdetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReminderdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
