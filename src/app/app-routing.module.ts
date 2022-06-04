import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {BreizhouseComponent} from "./core/components/breizhouse/breizhouse.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/login'},
  {path: 'login', loadChildren:
      () => import('./login/login.module')
        .then((module_) => module_.LoginModule)
  },
  {
    path: 'breizhouse', component: BreizhouseComponent ,children: [
      {
        path: 'home', loadChildren:
          () => import('./home/home.module')
            .then((module_) => module_.HomeModule)
      },
      {
        path: 'customers', loadChildren:
          () => import('./customer/customer.module')
            .then((module_) => module_.CustomerModule)
      },
      {
        path: 'orders', loadChildren:
          () => import('./order/order.module')
            .then((module_) => module_.OrderModule)
      },
      {
        path: 'products', loadChildren:
          () => import('./product/product.module')
            .then((module_) => module_.ProductModule)
      },
      {
        path: 'statistics', loadChildren:
          () => import('./statistic/statistic.module')
            .then((module_) => module_.StatisticModule)
      },
      {
        path: 'users', loadChildren:
          () => import('./user/user.module')
            .then((module_) => module_.UserModule)
      },
      {
        path: '**', loadChildren: () =>
          import('./page-not-found/page-not-found.module')
            .then((m) => m.PageNotFoundModule)
      }
    ]
  }

]


@NgModule({
  imports: [RouterModule.forRoot(routes,
    {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
