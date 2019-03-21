import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedditReaderComponent } from './reddit-reader/reddit-reader.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', component: RedditReaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
