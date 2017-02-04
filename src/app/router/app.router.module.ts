import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Router404Component } from './app.router-404.component';
import { Router500Component } from './app.router-500.component';
import { WelcomeComponent } from '../content/app.welcome.component';

import { ApplicationComponent } from '../content/application';

import {
  StatisticDashboardComponent,
  StatisticApplicationComponent
} from '../content/statistic';

import {
  SettingsListComponent,
  SettingsEditComponent
} from '../content/settings';

import {
  HelpDocumentationComponent,
  HelpExceptionsComponent,
  HelpMiscComponent
} from '../content/help';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },

  { path: 'Anwendungen', component: ApplicationComponent},

  { path: 'settings-list', component: SettingsListComponent },
  { path: 'settings-edit', component: SettingsEditComponent },

  { path: 'statistic-dashboard', component: StatisticDashboardComponent },
  { path: 'statistic-application', component: StatisticApplicationComponent },

  { path: 'help-documentation', component: HelpDocumentationComponent },
  { path: 'help-exceptions', component: HelpExceptionsComponent },
  { path: 'help-misc', component: HelpMiscComponent },

  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'error-500', component: Router500Component },
  { path: '**', component: Router404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRouterModule {}
