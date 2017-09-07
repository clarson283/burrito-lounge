import App from '../app.js';
import { Container } from 'flux/utils';
import ListStore from '../stores/listStore.js';

function getStores() {
    return [
        ListStore,
    ];
}

function getState() {
    return {
        list: ListStore.getState(),
    };
}

export default Container.createFunctional(App, getStores, getState);