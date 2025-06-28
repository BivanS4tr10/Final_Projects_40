import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ShopPage } from './shop/shop.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'create-account',
    loadChildren: () => import('./create-account/create-account.module').then( m => m.CreateAccountPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'verify-pin',
    loadChildren: () => import('./verify-pin/verify-pin.module').then( m => m.VerifyPinPageModule)
  },
  {
    path: 'recover-password-page',
    loadChildren: () => import('./recover-password-page/recover-password-page.module').then( m => m.RecoverPasswordPagePageModule)
  },
  {
    path: 'set-new-password',
    loadChildren: () => import('./set-new-password/set-new-password.module').then( m => m.SetNewPasswordPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then( m => m.ShopPageModule)
  },
    {
      path: 'shop',
      loadChildren: () => import('./shop/shop.module').then(m => m.ShopPageModule)
    },
    {
      path: 'orders',
      loadChildren: () => import('./orders/orders.module').then(m => m.OrdersPageModule)
    },
    {
      path: 'cart',
      loadChildren: () => import('./cart/cart.module').then(m => m.CartPageModule)
    },
    {
      path: 'profile',
      loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
    },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'category-filter',
    loadChildren: () => import('./category-filter/category-filter.module').then( m => m.CategoryFilterPageModule)
  },
  {
    path: 'track-order',
    loadChildren: () => import('./track-order/track-order.module').then( m => m.TrackOrderPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  ]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
