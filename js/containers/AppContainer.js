import Component from 'react';
import App from '../app.js';
import { Container } from 'flux/utils';
import ListStore from '../stores/listStore.js';

class myContainer extends Component {

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

const container = Container.create(myContainer);