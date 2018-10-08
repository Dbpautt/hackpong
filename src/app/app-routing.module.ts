import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPageComponent } from './pages/list-page/list-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

import { InitAuthGuard } from './guards/init-auth.guard';
import { RequireAnonGuard } from './guards/require-anon.guard';
import { RequireUserGuard } from './guards/require-user.guard';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full', canActivate: [ InitAuthGuard ]  },
  { path: 'create',  component: CreatePageComponent, canActivate: [ RequireUserGuard ] },
  { path: 'list', component: ListPageComponent, canActivate: [ InitAuthGuard ]},
  { path: 'list/:id', component: DetailPageComponent, canActivate: [ InitAuthGuard ] },
  { path: 'login', component: LoginComponent, canActivate: [ RequireAnonGuard ]  },
  { path: 'signup', component: SignupPageComponent, canActivate: [ RequireAnonGuard ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
