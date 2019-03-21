import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reddit-reader',
  templateUrl: './reddit-reader.component.html',
  styleUrls: ['./reddit-reader.component.scss']
})
export class RedditReaderComponent {

  public subreddit : string = "funny"

  changeSubreddit(subreddit) {
    this.subreddit = subreddit;
  }

}
