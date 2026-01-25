import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { GenericDialogComponent } from './generic-dialog/generic-dialog.component';
import { RemoveDialogComponent } from './remove-dialog/remove-dialog.component';

@NgModule({
  declarations: [
    GenericDialogComponent,
    RemoveDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    GenericDialogComponent,
    RemoveDialogComponent
  ]
})
export class DialogsModule { }