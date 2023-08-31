import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkComponent } from './bookmark.component';
import { CreateBookmarkModule } from './create-bookmark/create-bookmark.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    BookmarkComponent
  ],
  imports: [
    CommonModule,
    CreateBookmarkModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
  ],
  exports: [BookmarkComponent]
})
export class BookmarkModule {}
