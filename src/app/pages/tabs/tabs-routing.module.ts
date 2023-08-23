import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'student-profile',
        loadChildren: () => import('../student-profile/student-profile.module').then( m => m.StudentProfilePageModule)
      },
      {
        path: 'addgroup',
        loadChildren: () => import('../addgroup/addgroup.module').then( m => m.AddgroupPageModule)
      },
      {
        path: 'deletegroup',
        loadChildren: () => import('../deletegroup/deletegroup.module').then( m => m.DeletegroupPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/student-profile',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/student-profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
