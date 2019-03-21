import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RedditReaderComponent } from './reddit-reader/reddit-reader.component';
import { PostsDisplayerComponent } from './reddit-reader/posts-displayer/posts-displayer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RedditReaderComponent,
    PostsDisplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
