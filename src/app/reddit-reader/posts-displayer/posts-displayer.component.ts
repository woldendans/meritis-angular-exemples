import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class Post {
  public title : string;
  public ups   : number;

  constructor(title, ups) {
    this.title = title
    this.ups   = ups
  }
}

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

  constructor(private http: HttpClient) { }

  private loadPosts(subreddit) {
    this.http.get(`https://www.reddit.com/r/${subreddit}/.json`)
             .subscribe(
               (data : any)  => this.posts = data.data.children.map(children => new Post(children.data.title, children.data.ups))
             , (error : any) => { console.error(error); this.posts = [] } 
           )
  }

  ngOnInit() {
    this.loadPosts(this.subreddit)
  }

}
