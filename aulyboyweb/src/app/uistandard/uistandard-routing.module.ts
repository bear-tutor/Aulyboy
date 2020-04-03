import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UistandardPage } from './uistandard.page';

const routes: Routes = [
  {
    path: '',
    component: UistandardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UistandardPageRoutingModule {}
