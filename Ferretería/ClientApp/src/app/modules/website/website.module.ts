import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { StoresComponent } from './pages/stores/stores.component';
import { FaqComponent } from './pages/faq/faq.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TrackOrderComponent } from './pages/track-order/track-order.component';
import { PurchaseProcessComponent } from './pages/purchase-process/purchase-process.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent,
    ProductDetailComponent,
    ProfileComponent,
    StoresComponent,
    FaqComponent,
    TermsComponent,
    PrivacyComponent,
    ShoppingCartComponent,
    RegisterComponent,
    ContactComponent,
    TrackOrderComponent,
    PurchaseProcessComponent,
    LayoutComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    InfiniteScrollModule
  ]
})
export class WebsiteModule { }
