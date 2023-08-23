import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddgroupAdminPageRoutingModule } from './addgroup-admin-routing.module';

import { AddgroupAdminPage } from './addgroup-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddgroupAdminPageRoutingModule
  ],
  declarations: [AddgroupAdminPage]
})
export class AddgroupAdminPageModule {}
