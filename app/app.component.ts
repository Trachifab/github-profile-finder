import { Component } from '@angular/core';
import {GithubService} from './services/github.service';

@Component({
  selector: 'my-app',
  template: `
  <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
    <h2 class="navbar-brand">GitHub Profile Finder</h2>
  </nav>
  <div class="container"><profile></profile></div>`,
  providers: [GithubService]
})
export class AppComponent  { name = 'Angular'; }
