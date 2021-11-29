import { Component } from '@angular/core';
import { Person } from './models/person';
// import { throws } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tabPrenoms: string[] = ['ruben', 'joachim', 'benjamin'];
  roger = new Person('Roger', 'Moore', new Date('1927/10/14'));

  constructor() {
    setTimeout(() => {
      this.tabPrenoms.push('prunelle');
    }, 2000);
  }
}
