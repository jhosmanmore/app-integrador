import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsTeacherPage } from './tabs-teacher.page';

const routes: Routes = [
  {
    path: 'tabs-teacher',
    component: TabsTeacherPage,
    children: [
      {
        path: 'teacher-profile',
        loadChildren: () => import('../teacher-profile/teacher-profile.module').then( m => m.TeacherProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs-teacher/teacher-profile',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsTeacherPageRoutingModule {}
