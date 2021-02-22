import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardingComponent } from "./onboarding/onboarding.component";

const routes: Routes = [
  { path: 'onboarding', component: OnboardingComponent },
  { path: '', redirectTo: '/onboarding', pathMatch: 'full' },
  { path: '**', redirectTo: '/onboarding', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
