import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

const routes: Routes = [
  { path: 'page1', component: Page1Component },
  {
    path: 'page2',
    component: Page2Component,
    children: [
      {
        path: 'child1',
        component: Child1Component,
      },
      {
        path: 'child2',
        component: Child2Component,
      },
    ],
  },
  { path: '**', redirectTo: 'page1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
