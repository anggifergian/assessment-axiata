import { ITEM_ADDED, ITEM_REMOVED } from './actions';

export interface AxiataState {
    items: Array<{ id, title }>;
}

export const initialState: AxiataState = {
    items: []
}

let lastId = 0;

export function rootReducer(state: AxiataState, action): AxiataState {
    switch (action.type) {
        case ITEM_ADDED:
            return { items: [...state.items, { id: ++lastId, title: action.payload.title }] }
            break;
        case ITEM_REMOVED:
            return { items: state.items.filter(item => item.id !== action.payload.id) };
            break;
        default:
            return state;
            break;
    }
}