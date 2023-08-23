import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletegroupAdminPageRoutingModule } from './deletegroup-admin-routing.module';

import { DeletegroupAdminPage } from './deletegroup-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletegroupAdminPageRoutingModule
  ],
  declarations: [DeletegroupAdminPage]
})
export class DeletegroupAdminPageModule {}
