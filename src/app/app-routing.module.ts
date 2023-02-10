import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { HomeComponent } from './home/home.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountSampleComponent } from './account-sample/account-sample.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContractsComponent } from './contracts/contracts.component';
import { ReportsComponent } from './reports/reports.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TasksComponent } from './tasks/tasks.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: 'accounts', component: AccountsComponent, data: { text: 'Accounts' } },
  { path: 'account-sample', component: AccountSampleComponent, data: { text: 'Account Sample' } },
  { path: 'contacts', component: ContactsComponent, data: { text: 'Contacts' } },
  { path: 'contracts', component: ContractsComponent, data: { text: 'Contracts' } },
  { path: 'reports', component: ReportsComponent, data: { text: 'Reports' } },
  { path: 'calendar', component: CalendarComponent, data: { text: 'Calendar' } },
  { path: 'tasks', component: TasksComponent, data: { text: 'Tasks' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
