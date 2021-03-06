import { Component, OnInit } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-mosh',
  templateUrl: './mosh.component.html',
  styleUrls: ['./mosh.component.scss']
})
export class MoshComponent implements OnInit {
  post = {
    isSelected: false
  }

  tweet = {
    body: "Here is the body of a tweet...",
    isLiked: true,
    likesCount: 3
  }

  constructor() { }

  ngOnInit(): void {
  }

  onFavoriteChange(value: FavoriteChangedEventArgs) {
    console.log("Favorite changed:", value);
  }
}
