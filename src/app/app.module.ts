import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './Shared/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
