import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConfessionItemComponent } from './components/confession-item/confession-item.component';
import { ConfessionIteComponent } from './confession-ite/confession-ite.component';
import { AddConfessionComponent } from './components/add-confession/add-confession.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfessionItemComponent,
    AddConfessionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
