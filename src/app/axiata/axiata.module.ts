import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllticketComponent } from '../allticket/allticket.component';
import { AxiataComponent } from './axiata.component';

const axiataRoutes: Routes = [
  {
    path: '',
    component: AxiataComponent,
    children: [
      { path: '', redirectTo: 'allticket', pathMatch: 'full'},
      { path: 'allticket', component: AllticketComponent},
      { path: '**', redirectTo: 'allticket', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(axiataRoutes)],
  exports: [RouterModule]
})
export class AxiataModule {

}