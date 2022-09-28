import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RampModule, RampUnitModule, CoreModule } from '@playwire/pw-angular-component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RampModule, // ramp
    RampUnitModule, // ramp
    CoreModule.forRoot() // ramp
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
