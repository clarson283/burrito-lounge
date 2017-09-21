import React from 'react';
import App from '../app.js';
import { Container } from 'flux/utils';
import { ListStore } from '../stores/listStore.js';

export default class myContainer extends React.Component {

    static getStores() {
        return [
            ListStore,
        ];
    }

    static calculateState() {
        return {
            list: ListStore.getState(),
        };
    }

    render() {
        return <App list={this.state.list} />;
    }
}

const contain = Container.create(myContainer);