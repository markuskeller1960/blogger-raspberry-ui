import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// angular material
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';

// commons
import {
  DropdownMenuComponent,
  SimpleCardComponent,
  DeviceIndexComponent,
  DeviceIndexItemComponent,
  AddDeviceIndexComponent
} from './common';

// components
import {
  WelcomeComponent,
  WelcomeHeaderComponent
} from './content/welcome';

import {
  StatisticApplicationComponent,
  StatisticDashboardComponent
} from './content/statistic';

import {
  SettingsListComponent,
  SettingsEditComponent
} from './content/settings';

import {
  ApplicationComponent,
  ApplicationDashboardComponent
} from './content/application';

import {
  HelpDocumentationComponent,
  HelpExceptionsComponent,
  HelpMiscComponent
} from './content/help';

// directives
import {
  VisibilityDirective
} from './directive';

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
  UtilityService,
  SystemService,
  DeviceService,
  LocalStorageService
} from './service';

import {
  AppComponent,
  MainComponent,
  DeviceSelectionComponent
} from './root';

@NgModule({
  declarations: [
    AppComponent,
    DeviceSelectionComponent,
    MainComponent,
    DropdownMenuComponent,
    SimpleCardComponent,
    DeviceIndexComponent,
    DeviceIndexItemComponent,
    AddDeviceIndexComponent,
    Router404Component,
    Router500Component,
    MainToolbarComponent,
    MainSidenavComponent,
    MainSidenavHeaderComponent,
    WelcomeComponent,
    WelcomeHeaderComponent,
    ApplicationComponent,
    ApplicationDashboardComponent,
    StatisticApplicationComponent,
    StatisticDashboardComponent,
    SettingsListComponent,
    SettingsEditComponent,
    HelpDocumentationComponent,
    HelpExceptionsComponent,
    HelpMiscComponent,
    VisibilityDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    AppRouterModule
  ],
  providers: [
    MenuService,
    UtilityService,
    SystemService,
    DeviceService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
