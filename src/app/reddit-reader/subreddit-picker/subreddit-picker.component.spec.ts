import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubredditPickerComponent } from './subreddit-picker.component';

describe('SubredditPickerComponent', () => {
  let component: SubredditPickerComponent;
  let fixture: ComponentFixture<SubredditPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubredditPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubredditPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
