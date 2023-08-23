import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletegroupAdminPage } from './deletegroup-admin.page';

const routes: Routes = [
  {
    path: '',
    component: DeletegroupAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletegroupAdminPageRoutingModule {}
