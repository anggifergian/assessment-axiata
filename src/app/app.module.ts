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

import { OnboardingComponent } from "./onboarding/onboarding.component";
import { AxiataComponent } from './axiata/axiata.component';
import { AllticketComponent } from './allticket/allticket.component';
import { UsmTableComponent } from './components/usm-table.component';
import { UsmComponent } from './allticket/usm.component';
import { UsmFilterComponent } from './usm/usm-filter.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    AxiataComponent,
    AllticketComponent,
    UsmTableComponent,
    UsmComponent,
    UsmFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    TableModule,
    MatTableModule,
    MatSortModule,
    MatSlideToggleModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    TicketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
