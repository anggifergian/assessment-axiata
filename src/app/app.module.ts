import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
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
import { MatDialogModule } from "@angular/material/dialog";
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { OnboardingComponent } from "./onboarding/onboarding.component";
import { AxiataComponent } from './axiata/axiata.component';
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
import { DirectivesComponent } from './components/mosh/directives/directives.component';
import { InputFormatDirective } from './components/mosh/input-format.directive';
import { ZippyComponent } from './components/mosh/zippy/zippy.component';
import { RequestComponent } from './ticket/all-ticket/dialog/request/request.component';
import { MyTicketComponent } from './ticket/my-ticket/my-ticket.component';
import { TableTicketComponent } from './ticket/my-ticket/table-ticket/table-ticket.component';
import { ContactFormComponent } from './components/mosh/contact-form/contact-form.component';
import { VariantComponent } from './ticket/all-ticket/dialog/variant/variant.component';
import { AddTicketComponent } from './ticket/add-ticket/add-ticket.component';
import { ProductInformationComponent } from './ticket/add-ticket/product-information/product-information.component';
import { CourseHttpComponent } from './components/mosh/course-http/course-http.component';
import { PostService } from './components/mosh/services/post.service';
import { PacketParentComponent } from './ticket/add-ticket/packet-parent/packet-parent.component';
import { TableBenefitComponent } from './ticket/add-ticket/table-benefit/table-benefit.component';
import { TableNotificationComponent } from './ticket/add-ticket/table-notification/table-notification.component';
import { AppErrorHandler } from './components/mosh/services/app-error-handler';
import { GithubFollowersComponent } from './components/mosh/github-followers/github-followers.component';

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
  MatInputModule,
  MatDialogModule,
  MatStepperModule,
  MatProgressSpinnerModule
];

@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    AxiataComponent,
    UsmTableComponent,
    UsmComponent,
    UsmFilterComponent,
    AllTicketComponent,
    AllTicketFilterComponent,
    FavoriteComponent,
    MoshComponent,
    BootstrapCardComponent,
    LikeComponent,
    DirectivesComponent,
    InputFormatDirective,
    ZippyComponent,
    RequestComponent,
    MyTicketComponent,
    TableTicketComponent,
    ContactFormComponent,
    VariantComponent,
    AddTicketComponent,
    ProductInformationComponent,
    CourseHttpComponent,
    PacketParentComponent,
    TableBenefitComponent,
    TableNotificationComponent,
    GithubFollowersComponent
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
    { provide: ErrorHandler, useClass: AppErrorHandler },
    TicketService,
    BaseService,
    PostService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
