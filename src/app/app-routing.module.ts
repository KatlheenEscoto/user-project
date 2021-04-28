import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/panel/user', /* Redirigiendo cuando este vacia */
    pathMatch: 'full'
  },
  {
    path: 'panel',
    component: SkeletonComponent,
    children: [
      {
        path: 'user',
        loadChildren: () => import('@modules/user/user.module').then( (m) => m.UserModule )
      },
      {
        path: '**',
        redirectTo: '/panel/user', /* Si no la encuentra en las rutas hijas */
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/panel/user', /* Si no la encuentra */
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
