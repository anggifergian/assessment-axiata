import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { ITEM_ADDED } from 'src/app/actions';
import { AxiataState } from 'src/app/store';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @select('items') items;

  constructor(
    private ngRedux: NgRedux<AxiataState>
  ) {
  }

  ngOnInit(): void {
  }

  addItem(input: HTMLInputElement) {
    if (!input.value) return;

    this.ngRedux.dispatch({
      type: ITEM_ADDED,
      payload: { title: input.value }
    });

    input.value = '';
  }

}
