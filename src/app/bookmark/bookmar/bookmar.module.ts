import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarComponent } from './bookmar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AddLinkModule } from './add-link/add-link.module';


@NgModule({
  declarations: [
    BookmarComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    AddLinkModule,
  ]
})
export class BookmarModule {}
