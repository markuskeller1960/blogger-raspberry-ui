import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Router404Component } from './app.router-404.component';
import { Router500Component } from './app.router-500.component';
import { MainRouterGuard } from './app.main-router-guard.module';

import { WelcomeComponent } from '../content/welcome/app.welcome.component';

import {
  DeviceSelectionComponent,
  MainComponent
} from '../root';

import {
  ApplicationComponent,
  ApplicationDashboardComponent
} from '../content/application';

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
  { path: 'start', component: DeviceSelectionComponent },
  { path: 'main', component: MainComponent, canActivate: [MainRouterGuard], canActivateChild: [MainRouterGuard],
    children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'application-main', component: ApplicationComponent},
      { path: 'application-dashboard', component: ApplicationDashboardComponent},
      { path: 'settings-list', component: SettingsListComponent },
      { path: 'settings-edit', component: SettingsEditComponent },
      { path: 'statistic-dashboard', component: StatisticDashboardComponent },
      { path: 'statistic-application', component: StatisticApplicationComponent },
      { path: 'help-documentation', component: HelpDocumentationComponent },
      { path: 'help-exceptions', component: HelpExceptionsComponent },
      { path: 'help-misc', component: HelpMiscComponent }
    ]
  },
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'error-500', component: Router500Component },
  { path: '**', component: Router404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRouterModule {}
