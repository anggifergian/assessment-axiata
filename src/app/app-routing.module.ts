import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { FollowersComponent } from './pages/followers/followers.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'followers/:username',
    component: ProfileComponent,
  },
  {
    path: 'followers',
    component: FollowersComponent,
  },
  {
    path: 'axiata',
    loadChildren: () => import('./axiata/axiata.module').then(m => m.AxiataModule)
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
