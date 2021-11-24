import { AutocompleteModule } from './components/autocomplete/autocomplete.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { FilterPipe } from './filter.pipe';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    OverlayModule,
    BrowserAnimationsModule,
    AutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AutocompleteComponent]
})
export class AppModule { }
