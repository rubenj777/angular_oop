import { Component } from '@angular/core';
import { Person } from './models/person';

// import { throws } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  roger = new Person('Roger ', 'Moore', new Date('1927/10/14'));
  ruben = new Person('Ruben ', 'Jallifier', new Date('1997/08/25'));
  tabPrenoms: string[] = ['ruben', 'joachim', 'benjamin'];
  tabPersons: any[] = [];

  constructor() {
    setTimeout(() => {
      this.tabPrenoms.push('prunelle');
    }, 2000);
    this.tabPersons.push(this.roger, this.ruben);
  }
}
