import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsAdminPage } from './tabs-admin.page';

const routes: Routes = [
  {
    path: 'tabs-admin',
    component: TabsAdminPage,
    children: [
      {
        path: 'admin-profile',
        loadChildren: () => import('../admin-profile/admin-profile.module').then( m => m.AdminProfilePageModule)
      },
      {
        path: 'addgroup-admin',
        loadChildren: () => import('../addgroup-admin/addgroup-admin.module').then( m => m.AddgroupAdminPageModule)
      },
      {
        path: 'deletegroup-admin',
        loadChildren: () => import('../deletegroup-admin/deletegroup-admin.module').then( m => m.DeletegroupAdminPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs-admin/admin-profile',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs-admin/admin-profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsAdminPageRoutingModule {}
