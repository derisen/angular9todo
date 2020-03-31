import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MsalModule,
  MsalInterceptor,
  MSAL_CONFIG,
  MSAL_CONFIG_ANGULAR,
  MsalService,
  MsalAngularConfiguration
} from '@azure/msal-angular';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { Configuration } from 'msal';
import { TodoService } from './todo.service';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { TodoAddComponent } from './todo-add/todo-add.component';

export const protectedResourceMap: [string, string[]][] = [
  ['https://localhost:44351/api/todolist/', ['api://9a4f1ef6-f28f-4175-a80b-8939893f90f4/access_as_user']]
];

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;

function MSALConfigFactory(): Configuration {
  return {
    auth: {
      clientId: 'c5ad7d66-babf-4d43-acad-4ab0a7b39579',
      authority: "https://login.microsoftonline.com/common/",
      validateAuthority: true,
      redirectUri: "http://localhost:4200/",
      postLogoutRedirectUri: "http://localhost:4200/",
      navigateToLoginRequestUrl: true,
    },
    cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: isIE, // set to true for IE 11
    },
  };
}

function MSALAngularConfigFactory(): MsalAngularConfiguration {
  return {
    popUp: !isIE,
    consentScopes: [
      "openid",
      "profile",
      "api://9a4f1ef6-f28f-4175-a80b-8939893f90f4/access_as_user"
    ],
    unprotectedResources: ["https://www.microsoft.com/en-us/"],
    protectedResourceMap,
    extraQueryParameters: {}
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoEditComponent,
    TodoViewComponent,
    TodoAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule,
    MsalModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
      provide: MSAL_CONFIG,
      useFactory: MSALConfigFactory
    },
    {
      provide: MSAL_CONFIG_ANGULAR,
      useFactory: MSALAngularConfigFactory
    },
    MsalService,
    TodoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
