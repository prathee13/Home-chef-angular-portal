import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AdminComponent } from '@app/admin';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { DialogBoxComponent } from '@app/dialog-box/dialog-box.component';

@NgModule({
  declarations: [
    AdminComponent,
    DialogBoxComponent 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
],
  imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        CdkTableModule,
        MatTableModule,
        MatTableDataSource,
        MatDialogModule,
        MatDialogRef,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatInputModule
  ],
  exports: [
    AdminComponent
  ],
  entryComponents: [
    DialogBoxComponent
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
