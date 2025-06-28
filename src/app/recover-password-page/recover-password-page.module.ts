import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecoverPasswordPagePageRoutingModule } from './recover-password-page-routing.module';

import { RecoverPasswordPagePage } from './recover-password-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecoverPasswordPagePageRoutingModule
  ],
  declarations: [RecoverPasswordPagePage]
})
export class RecoverPasswordPagePageModule {}
