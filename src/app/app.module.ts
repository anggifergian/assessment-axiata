import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TicketService } from './services/ticket.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";

import { OnboardingComponent } from "./onboarding/onboarding.component";
import { AxiataComponent } from './axiata/axiata.component';
import { AllticketComponent } from './allticket/allticket.component';
import { UsmTableComponent } from './components/usm-table.component';
import { UsmComponent } from './usm/usm.component';
import { UsmFilterComponent } from './usm/usm-filter.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AllTicketComponent } from './ticket/all-ticket/all-ticket.component';
import { AllTicketFilterComponent } from './ticket/all-ticket/all-ticket-filter.component';
import { BaseService } from './services/base.service';
import { FavoriteComponent } from './components/mosh/favorite/favorite.component';
import { MoshComponent } from './components/mosh/mosh.component';
import { BootstrapCardComponent } from './components/mosh/bootstrap-card/bootstrap-card.component';
import { LikeComponent } from './components/mosh/like/like.component';

const materialModule = [
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatMenuModule,
  MatSelectModule,
  MatTableModule,
  MatSortModule,
  MatSlideToggleModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    AxiataComponent,
    AllticketComponent,
    UsmTableComponent,
    UsmComponent,
    UsmFilterComponent,
    AllTicketComponent,
    AllTicketFilterComponent,
    FavoriteComponent,
    MoshComponent,
    BootstrapCardComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    ...materialModule,
  ],
  providers: [
    TicketService,
    BaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
