# Blogger Raspberry PI

This project uses [Angular-CLI](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

## System configuration

Please follow these steps in the given order:

1. Install Node.js or make sure you have the latest version installed. Set the needed system variables, IntelliJ will use these variables to configure node settings. See [Node.js](https://nodejs.org/en/) for further information depending on your OS. 

2. Install [Angular-CLI](https://github.com/angular/angular-cli) as described at the Angular-CLI website ( with npm ). Please note Angular-CLI uses Webpack since version beta.14.

**Important**: You may find tutorials on the net with SystemJS configuration even at the official Angular2 website. These tutorials don't work any longer and cause problems. For example: Module ID's are no longer needed and keep Webpack from building.


## Checkout to IntelliJ
1. Start IntelliJ and close your current project if it was opened by default. In the menu choose 'Checkout from version control'. Select GIT from the list and fill out the form with the required values ( URL: **https://github.com/markuskeller1960/blogger-raspberry-ui.git** ). IntelliJ will automatically recognize the Angular-CLI project. 

2. Install Font Awesome local (run **npm install font-awesome --save** in the newly created project directory).

3. Install Angular Flex Layout local (run **npm install --save @angular/flex-layout** in the newly created project directory).

4. Install Angular Material local (run **npm install --save @angular/material** in the newly created project directory).

5. Install HammerJS local (run **npm install --save hammerjs** and **npm install --save-dev @types/hammerjs** in the newly created project directory).

**Note**: Check your system configuration if IntelliJ doesn't recognize the Angular-CLI project.


## Before you start writing code

1. Read the [Angular Style Guide](https://angular.io/styleguide) first.

2. The OPEn code ist written in Typescript. Do not mix Typescript with JavaScript.

3. Some tutorials use deprecated code with no injections. Use injections when ever possible.

4. Put templates in separate HTML files even if they are small.

5. Put styles in separate *.scss files even if they are small. Do not create *.css files, they will not be recognized by Webpack since we have updated the configuration for using SASS.

6. There is a file named install.txt in /docs directory about how to configure Angular-CLI, use this file if the configuration in **angular-cli.json** gets lost somehow.

7. Be careful if you update to newer versions of Angular-CLI, Bootstrap, Angular 2, Font Awesome and other tools. These Tools usually need a new system configuration that is no longer compatible with the configuration of other users. Always discuss an update with the team and get their agreement first.
 
 8. Update the documentation if you make any changes in the configuration and pass a copy of the new version to the team.

For more information about Angular 2 see [Angular Website](https://angular.io/docs/ts/latest/).

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

