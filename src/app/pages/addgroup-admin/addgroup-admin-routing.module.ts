import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddgroupAdminPage } from './addgroup-admin.page';

const routes: Routes = [
  {
    path: '',
    component: AddgroupAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddgroupAdminPageRoutingModule {}
