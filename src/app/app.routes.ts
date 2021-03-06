import { RouterModule, Routes } from '@angular/router';
import {NopagefoundComponent} from './pages/nopagefound/nopagefound.component';


const appRoutes: Routes = [
  { path: '**', component: NopagefoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
