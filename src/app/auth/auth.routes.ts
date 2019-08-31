import {RouterModule, Routes} from '@angular/router';


import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthComponent} from './auth.component';

const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: '', redirectTo: '/login', pathMatch: 'full'}
    ]
  }
];


export const AUTH_ROUTES = RouterModule.forChild(authRoutes);
