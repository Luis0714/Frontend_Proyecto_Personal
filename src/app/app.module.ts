import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpInterceptor } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/masterPage/header/header.component';
import { FooterComponent } from './components/masterPage/footer/footer.component';
import { TimeResponseInterceptor } from './interceptors/time-response.interceptor';
import { TokenInterceptor } from './interceptors/Token/token.interceptor';
import { HomeComponent } from './components/Pages/home/home.component';
import { NotFoundComponent } from './components/Pages/Errors/not-found/not-found.component';
import { InternalServerErrorComponent } from './components/Pages/Errors/internal-server-error/internal-server-error.component';
import { LoginComponent } from './components/Pages/login/login.component';
import { RegisterComponent } from './components/Pages/register/register.component';
import { ResetPasswordComponent } from './components/Pages/reset-password/reset-password.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    InternalServerErrorComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TimeResponseInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
