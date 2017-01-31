import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// angular material
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';

// commons
import {
  DropdownMenuComponent
} from './common/menu';

import {
  ContentHeaderCardComponent
} from './common/card';

// components
import { WelcomeComponent } from './content/app.welcome.component';

import {
  StatisticServerComponent,
  StatisticApplicationComponent,
  StatisticDashboardComponent
} from './content/statistic';

import {
  SettingsListComponent,
  SettingsEditComponent
} from './content/settings';

import {
  HelpDocumentationComponent,
  HelpExceptionsComponent,
  HelpMiscComponent
} from './content/help';

// navigation
import {
  MainToolbarComponent,
  MainSidenavComponent,
  MainSidenavHeaderComponent
} from './navigation';

// router
import {
  AppRouterModule,
  Router404Component,
  Router500Component } from './router';

// services (singleton)
import {
  MenuService,
  UtilityService } from './service';

import { AppComponent } from './root/app.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownMenuComponent,
    Router404Component,
    Router500Component,
    ContentHeaderCardComponent,
    MainToolbarComponent,
    MainSidenavComponent,
    MainSidenavHeaderComponent,
    WelcomeComponent,
    StatisticServerComponent,
    StatisticApplicationComponent,
    StatisticDashboardComponent,
    SettingsListComponent,
    SettingsEditComponent,
    HelpDocumentationComponent,
    HelpExceptionsComponent,
    HelpMiscComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    AppRouterModule
  ],
  providers: [
    MenuService,
    UtilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
