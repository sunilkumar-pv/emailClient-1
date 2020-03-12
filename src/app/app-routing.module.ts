import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';

const routes: Routes = [
  {
    path: 'inbox',
    loadChildren: () => import('./inbox/inbox.module').then(mod => mod.InboxModule),
    canLoad: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
