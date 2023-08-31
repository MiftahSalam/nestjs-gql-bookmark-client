import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateBookmarkComponent } from './create-bookmark/create-bookmark.component';
import { Observable, map } from 'rxjs';
import { Bookmark, BookmarksGQL } from 'src/generated-types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {
  bookmarks$: Observable<Bookmark[]>

  constructor(private readonly dialog: MatDialog, private readonly bookmarksGql: BookmarksGQL, private readonly router: Router) {

  }
  ngOnInit(): void {
    this.bookmarks$ = this.bookmarksGql.watch().valueChanges.pipe(map((result) => result.data.bookmarks))
  }

  onBookmarkClick(id: string) {
    this.router.navigate(['bookmark', id])
  }

  onFabClick() {
    this.dialog.open(CreateBookmarkComponent)
  }
}
