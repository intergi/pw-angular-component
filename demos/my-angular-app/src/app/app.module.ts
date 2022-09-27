import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyLibModule, RampModule, CoreModule } from '@playwire/pw-angular-component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MyLibModule,
    RampModule, // ramp
    CoreModule.forRoot() // ramp
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
