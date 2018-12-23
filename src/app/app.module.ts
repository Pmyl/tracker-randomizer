import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlttprUiModule } from './alttpr-ui/alttpr-ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AlttprUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
