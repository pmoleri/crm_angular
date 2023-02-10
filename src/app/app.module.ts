import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { IgxGridModule, IgxListModule, IgxAvatarModule, IgxChipsModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxSelectModule, IgxInputGroupModule, IgxDropDownModule, IgxDialogModule, IgxTabsModule, IgxAccordionModule, IgxExpansionPanelModule, IgxCheckboxModule, IgxNavbarModule, IgxNavigationDrawerModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountSampleComponent } from './account-sample/account-sample.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContractsComponent } from './contracts/contracts.component';
import { ReportsComponent } from './reports/reports.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TasksComponent } from './tasks/tasks.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountsComponent,
    AccountSampleComponent,
    ContactsComponent,
    ContractsComponent,
    ReportsComponent,
    CalendarComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxCategoryChartModule,
    IgxGridModule,
    IgxListModule,
    IgxAvatarModule,
    IgxChipsModule,
    FormsModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxToggleModule,
    IgxIconModule,
    IgxSelectModule,
    IgxInputGroupModule,
    IgxDropDownModule,
    IgxDialogModule,
    IgxTabsModule,
    IgxAccordionModule,
    IgxExpansionPanelModule,
    IgxCheckboxModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
