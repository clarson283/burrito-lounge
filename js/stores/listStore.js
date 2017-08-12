import EventEmitter from 'EventEmitter';
import constants from 'constants/appConstants';
import AppDispatcher from './dispatcher.js';

const CHANGE_event = 'change';

// let ListStore = {
//     list: []
// };

class ListStoreClass extends EventEmitter {

}

const ListStore = new ListStoreClass();

AppDispatcher.register((payload) => {
    const action = payload.action;

    switch (action.actionType) {
        case constants.actions.ADD_ITEM:
            ListStore.emit(CHANGE_EVENT)
            break;
    }

    // if (payload.actionType === 'add-to-list') {
    //     ListStore.city = payload.selectedItem;
    // }
});
