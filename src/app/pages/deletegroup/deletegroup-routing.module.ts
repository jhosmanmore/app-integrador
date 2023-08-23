import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletegroupPage } from './deletegroup.page';

const routes: Routes = [
  {
    path: '',
    component: DeletegroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletegroupPageRoutingModule {}
