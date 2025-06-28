import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecoverPasswordPagePage } from './recover-password-page.page';

const routes: Routes = [
  {
    path: '',
    component: RecoverPasswordPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecoverPasswordPagePageRoutingModule {}
