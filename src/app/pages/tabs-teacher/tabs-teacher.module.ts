import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsTeacherPageRoutingModule } from './tabs-teacher-routing.module';

import { TabsTeacherPage } from './tabs-teacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsTeacherPageRoutingModule
  ],
  declarations: [TabsTeacherPage]
})
export class TabsTeacherPageModule {}
