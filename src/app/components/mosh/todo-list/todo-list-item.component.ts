import { NgRedux } from '@angular-redux/store';
import { Component, Input, OnInit } from '@angular/core';
import { ITEM_REMOVED } from 'src/app/actions';
import { AxiataState } from 'src/app/store';

@Component({
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

  @Input() item;

  constructor(
    private ngRedux: NgRedux<AxiataState>,
  ) { }

  ngOnInit(): void {
  }

  remove(id) {
    this.ngRedux.dispatch({
      type: ITEM_REMOVED,
      payload: { id }
    })
  }

}
