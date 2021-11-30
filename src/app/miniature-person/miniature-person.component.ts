import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Person } from '../models/person';

@Component({
  selector: 'app-miniature-person',
  templateUrl: './miniature-person.component.html',
  styleUrls: ['./miniature-person.component.css'],
})
export class MiniaturePersonComponent implements OnInit {
  @Input() public person!: Person;
  @Output() deletePerson = new EventEmitter<void>();

  constructor() {}

  delete() {
    this.deletePerson.emit();
  }

  ngOnInit(): void {}
}
