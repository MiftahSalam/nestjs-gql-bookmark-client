import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpLink } from "apollo-angular/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginModule } from './auth/login/login.module';
import { SignUpModule } from './auth/sign-up/sign-up.module';
import { AuthModule } from "./auth/auth.module";
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { BookmarModule } from './bookmark/bookmar/bookmar.module';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'api/graphql'
          })
        }
      },
      deps: [HttpLink]
    }
  ],
  bootstrap: [AppComponent],
  imports: [
    HttpClientModule,
    ApolloModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HeaderModule,
    LoginModule,
    SignUpModule,
    AuthModule,
    HomeModule,
    BookmarModule,
  ]
})
export class AppModule {}
