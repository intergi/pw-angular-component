import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { RampComponent } from './ramp/ramp.component';
import { RampUnitComponent } from './ramp-unit/ramp-unit.component';
// import { RampComponent }  from "@playwire/pw-angular-component";
// import { RampUnitComponent }  from "@playwire/pw-angular-component";

@NgModule({
  imports:      [ 
    BrowserModule, 
    CoreModule.forRoot()
  ],
  declarations: [ AppComponent, RampComponent, RampUnitComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
