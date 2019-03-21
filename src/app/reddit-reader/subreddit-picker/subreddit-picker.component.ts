import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subreddit-picker',
  templateUrl: './subreddit-picker.component.html',
  styleUrls: ['./subreddit-picker.component.scss']
})
export class SubredditPickerComponent {

  @Output() subredditPicked : EventEmitter<string> = new EventEmitter();

  public subreddit: string;

  public formSubmitted() {
    this.subredditPicked.emit(this.subreddit)
  }

}
