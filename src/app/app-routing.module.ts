import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedditReaderComponent } from './reddit-reader/reddit-reader.component'
import { FaqComponent }          from './faq/faq.component'

const routes: Routes = [
  { path: ''   , pathMatch: 'full', component: RedditReaderComponent },
  { path: 'faq', component: FaqComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
