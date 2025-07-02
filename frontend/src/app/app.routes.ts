import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { authGuard } from './admin/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: LoginAdminComponent },
  { path: 'admin/dashboard', component: DashboardAdminComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
