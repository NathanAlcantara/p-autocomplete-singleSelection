import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AutoCompleteModule } from 'primeng/autocomplete';

import { AppComponent } from './app.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
