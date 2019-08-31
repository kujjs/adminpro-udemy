import {NgModule} from '@angular/core';
import {AUTH_ROUTES} from './auth.routes';

import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AUTH_ROUTES
  ]
})
export class AuthModule {
}
