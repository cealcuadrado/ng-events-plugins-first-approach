import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventPluginsModule } from '@tinkoff/ng-event-plugins';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    EventPluginsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
