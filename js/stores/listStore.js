import { EventEmitter } from 'events';
// import constants from '../constants/appConstants';
import AppDispatcher from '../dispatcher.js';

const CHANGE_event = 'change';

// let eventEmitter = new EventEmitter();

let list = {
    listArray: []
};

// let EvEmitter = new EventEmitter();

class ListStore extends EventEmitter {

    getInitialState(): number {
        return 0;
    }

    reduce(state: number, action: Object): number {
        switch (action.type) {
            case 'increment':
                return state + 1;

            case 'square':
                return state * state;

            default:
                return state;
        }
    }

    emitChange() {
		this.emit(CHANGE_EVENT);
	}

    addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}
}

// let listStore = new ListStore();

AppDispatcher.register((payload) => {
    const action = payload.action;

    switch (action.actionType) {
        case constants.actions.ADD_ITEM:
            list.listArray.push(payload.newItem);
            listStore.emitChange();
            break;
    }

    // if (payload.actionType === 'add-to-list') {
    //     ListStore.city = payload.selectedItem;
    // }
});

export default ListStore;
