import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'page', loadChildren: () => import('./second-page/second.module').then(m => m.SecondModule)},
  { path: 'admin', component: AdminComponent },
  {path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

