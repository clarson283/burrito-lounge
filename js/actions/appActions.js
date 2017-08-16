import constants from './constants/appConstants.js';
import AppDispatcher from './dispatcher.js';


export default {

    addToList(param) {
        AppDispatcher.dispatch({
            actionName: constants.actions.ADD_ITEM,
            param
        });
    }
}