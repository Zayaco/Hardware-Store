import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from '../app/app-routing.module'
import { NotFoundComponent } from '../app/modules/shared/not-found/not-found.component'
//import { TimeInterceptor } from './interceptors/time.interceptor';
//import { TokenInterceptor } from './interceptors/token.interceptor';
// import { QuicklinkModule } from 'ngx-quicklink';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    // QuicklinkModule,
  ],
  providers: [
    //{
    //  provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true
    //}, {
    //  provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
    //}
  ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
