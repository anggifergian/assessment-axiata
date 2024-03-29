import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoshComponent } from '../components/mosh/mosh.component';
import { AddTicketComponent } from '../ticket/add-ticket/add-ticket.component';
import { AllTicketComponent } from '../ticket/all-ticket/all-ticket.component';
import { MyTicketComponent } from '../ticket/my-ticket/my-ticket.component';
import { AxiataComponent } from './axiata.component';

const axiataRoutes: Routes = [
  {
    path: '',
    component: AxiataComponent,
    children: [
      {
        path: '',
        redirectTo: 'all-ticket',
        pathMatch: 'full'
      },
      {
        path: 'mosh',
        component: MoshComponent
      },
      {
        path: 'all-ticket',
        component: AllTicketComponent
      },
      {
        path: 'my-test',
        component: MyTicketComponent
      },
      {
        path: 'add-ticket',
        component: AddTicketComponent
      },
      {
        path: '**',
        redirectTo: 'allticket',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(axiataRoutes)],
  exports: [RouterModule]
})
export class AxiataModule {

}
