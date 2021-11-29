import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miniature-person',
  templateUrl: './miniature-person.component.html',
  styleUrls: ['./miniature-person.component.css'],
})
export class MiniaturePersonComponent implements OnInit {
  tabName: string[] = [];
  constructor() {
    this.tabName.push('Ruben , 25.08.1997');
    this.tabName.push('Georges , 26.07.1655');
  }

  ngOnInit(): void {}
}
