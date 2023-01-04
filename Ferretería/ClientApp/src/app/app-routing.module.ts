import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './modules/shared/not-found/not-found.component';
//import { QuicklinkStrategy } from 'ngx-quicklink';
//import { AdminGuard } from './guards/admin.guard';
//import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/modules/website/website.module').then(m => m.WebsiteModule),
    data: {
      preload: true,
    }
  },
  {
    path: 'cms',
    //canActivate: [AuthGuard, AdminGuard],
    loadChildren: () => import('../app/modules/cms/cms.module').then(m => m.CmsModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    /*preloadingStrategy: QuicklinkStrategy*/
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
