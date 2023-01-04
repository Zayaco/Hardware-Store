import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { StoresComponent } from './pages/stores/stores.component';
import { FaqComponent } from './pages/faq/faq.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component'
import { ContactComponent } from './pages/contact/contact.component';
import { TrackOrderComponent } from './pages/track-order/track-order.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component'
import { PurchaseProcessComponent } from './pages/purchase-process/purchase-process.component';
import { LayoutComponent } from './components/layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'category/:id',
        component: CategoriesComponent
      },
      {
        path: 'product:/id',
        component: ProductDetailComponent,
        data: {
          preload: true
        }
      },
      {
        path: 'mycart',
        component: ShoppingCartComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'myaccount',
        component: ProfileComponent
      },
      {
        path: 'stores',
        component: StoresComponent
      },
      {
        path: 'faq',
        component: FaqComponent
      },
      {
        path: 'terms',
        component: TermsComponent
      },
      {
        path: 'privacy',
        component: PrivacyComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'purchase',
        component: PurchaseProcessComponent
      },
      {
        path: 'track-order',
        component: TrackOrderComponent
      },
      {
        path: 'notfound',
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
