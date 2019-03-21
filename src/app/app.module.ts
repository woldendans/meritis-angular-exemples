import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RedditReaderComponent } from './reddit-reader/reddit-reader.component';
import { PostsDisplayerComponent } from './reddit-reader/posts-displayer/posts-displayer.component';
import { SubredditPickerComponent } from './reddit-reader/subreddit-picker/subreddit-picker.component';

import { RedditService } from './services/reddit.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RedditReaderComponent,
    PostsDisplayerComponent,
    SubredditPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ RedditService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
