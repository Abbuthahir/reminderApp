import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewReminderPage } from './new-reminder.page';

describe('NewReminderPage', () => {
  let component: NewReminderPage;
  let fixture: ComponentFixture<NewReminderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewReminderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
