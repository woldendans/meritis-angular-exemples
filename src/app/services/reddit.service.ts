import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../model/reddit'

@Injectable()
export class RedditService {

  constructor(private http: HttpClient) {}

  public loadPosts(subreddit) : Promise<Post[]> {
    return new Promise((resolve, reject) =>
      this.http.get(`https://www.reddit.com/r/${subreddit}/.json`).subscribe(
         (data : any) => resolve(data.data.children.map(children => new Post(children.data.title, children.data.ups)))
       , error        => reject(error)))
  }
}
