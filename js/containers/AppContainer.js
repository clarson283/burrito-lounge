import App from '../app.js';
import {Component} from 'react';
import Container from 'flux/utils';
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

export default Container.create(App, getStores, getState);