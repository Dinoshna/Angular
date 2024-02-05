import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { warningAlertComponent } from '../warning/warningAlert.component';
import { successAlertComponent } from '../success/successAlert.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        warningAlertComponent,
        successAlertComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
       CommonModule
    ],
bootstrap: [AppComponent],
schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule{}