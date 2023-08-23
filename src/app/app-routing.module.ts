import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  // {
  //   path: 'student-profile',
  //   loadChildren: () => import('./pages/student-profile/student-profile.module').then( m => m.StudentProfilePageModule)
  // },
  // {
  //   path: 'addgroup',
  //   loadChildren: () => import('./pages/addgroup/addgroup.module').then( m => m.AddgroupPageModule)
  // },
  // {
  //   path: 'deletegroup',
  //   loadChildren: () => import('./pages/deletegroup/deletegroup.module').then( m => m.DeletegroupPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/tabs-admin/tabs-admin.module').then( m => m.TabsAdminPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/tabs-teacher/tabs-teacher.module').then( m => m.TabsTeacherPageModule)
  },
  // {
  //   path: 'teacher-profile',
  //   loadChildren: () => import('./pages/teacher-profile/teacher-profile.module').then( m => m.TeacherProfilePageModule)
  // }
  // {
  //   path: 'admin-profile',
  //   loadChildren: () => import('./pages/admin-profile/admin-profile.module').then( m => m.AdminProfilePageModule)
  // },
  // {
  //   path: 'addgroup-admin',
  //   loadChildren: () => import('./pages/addgroup-admin/addgroup-admin.module').then( m => m.AddgroupAdminPageModule)
  // },
  // {
  //   path: 'deletegroup-admin',
  //   loadChildren: () => import('./pages/deletegroup-admin/deletegroup-admin.module').then( m => m.DeletegroupAdminPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
