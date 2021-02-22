import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardingComponent } from "./onboarding/onboarding.component";

const routes: Routes = [
  { path: '', redirectTo: 'onboarding', pathMatch: 'full' },
  { path: 'onboarding', component: OnboardingComponent },
  { path: 'axiata', loadChildren: './axiata/axiata.module#AxiataModule' },
  { path: '**', redirectTo: 'onboarding', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
