# Playwire Angular Ramp Component

Playwire's Angular Component 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.


### Angular Ramp Component NPM package

https://www.npmjs.com/package/@playwire/pw-angular-component


### Install the component in an Angular App

`npm i --save @playwire/pw-angular-component`


### Use the component in an Angular App

In the main app.module.ts:
```
import { AppComponent } from './app.component';
import { RampModule, CoreModule } from '@playwire/pw-angular-component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RampModule, // ramp
    CoreModule.forRoot() // ramp
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

In the app.component.html
```
  <ramp publisherId="1016948" id="63673"></ramp>
  <ramp-unit type="leaderboard_atf" selectorId="leaderboard_atf" cssClass="pw-tag"></ramp-unit>
```


### Playwire Demo App

In the terminal `cd demos/my-angular-app/`

Run `npm run start` for a dev server. Navigate to `https://localhost:4000/`. You will see the app running.

In order to see ads for this demo app add this entry in the host file:
`127.0.0.1       brickset.com`

Then navigate to `https://brickset.com:4000/`


### Code scaffolding (Ramp Component)

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


### Build the component

Run `ng build pw-angular-component --configuration production` to build the project. The build artifacts will be stored in the `dist/` directory.


### Publish the component to NPM registry

In `dist/pw-angular-component` run `npm login` then `npm publish`.


### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.


### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
