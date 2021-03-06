import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  @Input() isSelected: boolean;
  @Output('onChange') click = new EventEmitter();
  icons:string;

  ngOnInit(): void {
    this.icons = this.isSelected ? "favorite" : "favorite_border";
  }

  onClick() {
    this.icons = this.isSelected ? "favorite_border" : "favorite";

    this.isSelected = !this.isSelected;
    this.click.emit({ status: this.isSelected });
  }
}

export interface FavoriteChangedEventArgs {
  status: boolean;
}
