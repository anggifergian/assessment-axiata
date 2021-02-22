import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllticketComponent } from '../allticket/allticket.component';
import { AxiataComponent } from './axiata.component';

const axiataRoutes: Routes = [
    {
        path: '',
        component: AxiataComponent,
        children: [
            { path: '', redirectTo: 'main', pathMatch: 'full'},
            { path: 'main', component: AllticketComponent},
            { path: '**', redirectTo: '' }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(axiataRoutes)],
    exports: [RouterModule]
})
export class AxiataModule {

}