import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletegroupPageRoutingModule } from './deletegroup-routing.module';

import { DeletegroupPage } from './deletegroup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletegroupPageRoutingModule,
    IonicModule
  ],
  declarations: [DeletegroupPage]
})
export class DeletegroupPageModule {}
