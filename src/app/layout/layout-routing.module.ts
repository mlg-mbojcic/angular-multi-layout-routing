import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './client-layout/client-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: 'dashboard', component: ClientLayoutComponent, loadChildren: '../dashboard/dashboard.module#DashboardModule' },
  { path: 'users', loadChildren: '../users/users.module#UsersModule' },
  { path: 'account-settings', loadChildren: '../account-settings/account-settings.module#AccountSettingsModule' },
  {
    path: 'login',
    loadChildren: '../login/login.module#LoginModule',
    data: { showHeader: false, showSidebar: false }
  },
  {
    path: 'registration',
    loadChildren: '../registration/registration.module#RegistrationModule',
    data: { showHeader: false, showSidebar: false }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
