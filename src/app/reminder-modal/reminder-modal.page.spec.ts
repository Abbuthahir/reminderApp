import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReminderModalPage } from './reminder-modal.page';

describe('ReminderModalPage', () => {
  let component: ReminderModalPage;
  let fixture: ComponentFixture<ReminderModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReminderModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
