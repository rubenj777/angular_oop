import { Component } from '@angular/core';
import { Person } from './models/person';

// import { throws } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ruben = new Person('Ruben ', 'Jallifier', new Date('1997/08/25'));
  roger = new Person('Roger ', 'Moore', new Date('1995/05/23 '));
  jean = new Person('Jean ', 'Carlos', new Date('1985/05/14'));
  constructor() {}
}
