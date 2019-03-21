import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../model/reddit'
import { RedditService } from '../../services/reddit.service'

@Component({
  selector: 'app-posts-displayer',
  templateUrl: './posts-displayer.component.html',
  styleUrls: ['./posts-displayer.component.scss']
})
export class PostsDisplayerComponent implements OnInit {

  private _subreddit : string;

  @Input() set subreddit(sub : string) {
    this._subreddit = sub;
    this.loadPosts(this.subreddit);
  }

  get subreddit() {
    return this._subreddit;
  }

  public posts : Post[] = []

  constructor(private redditService: RedditService) { }

  private loadPosts(subreddit) {
    this.redditService.loadPosts(subreddit)
      .then ((posts : Post[]) => this.posts = posts)
      .catch((error : any)    => this.posts = [])
  }

  ngOnInit() {
    this.loadPosts(this.subreddit)
  }

}
