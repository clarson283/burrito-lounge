import React from 'react';
import ReactDOM from 'react-dom';
// import AppContainer from './containers/AppContainer.js';
import constants from './constants/appConstants.js';
import appActions from './actions/appActions.js';
// import AppDispatcher from './dispatcher.js';
import ListStore from './stores/listStore.js';
import axios from 'axios';
import async from 'babel-polyfill';

import MenuOptions from './components/MenuOptions.js';
import OrderCalculator from './components/OrderCalculator.js'

// Load Stylesheets
require('../less/main.less');

class App extends React.Component {

    constructor(props) {
        super(props);

        this.handleItemAddition = this.handleItemAddition.bind(this);

        this.state = {
            // value: '',
            menu: [],
            order: []
        };
    }

    componentWillMount() {

        axios.get('/menu')
            .then(res => {
                let data = res.data;

                console.log('premount settings');

                let tableArray = [];

                data.map(obj => tableArray.push([obj.name, obj.cost]));

                this.setState({
                    menu: [ tableArray ]
                });
            })
            .catch(function(err) {
                console.log('Fetching error: ', err.message);
            });
    }

    componentDidMount() {

    }

    // handleChange(event) {
    //     this.setState({value: event.target.value});
    // }

    placeOrder() {
        let url = '/orders',
            data = {
                order: $('input').val(),
                quantity: 1
            };

        $.post(url, data);

        this.setState({
            order: data
        });
    }

    handleItemAddition(itemValue) {
        this.setState({
            order: itemValue
        });
    }

    // componentDidMount() {
    //     // ListStore.bind('change', this.listUpdated);
    //
    //     // console.log(this.state);
    // }

    //
    // componentWillUnmount() {
    //     ListStore.unbind('change', this.listUpdated);
    // }
    //
    // listUpdated() {
    //     this.setState = {(
    //
    //     )}
    // }

    render() {

        let { menu } = this.state;

        console.log(menu);
        // console.log(this.state);

        return (menu.length) ?
            <div>
                <MenuOptions menu={menu} addMenuItem={this.handleItemAddition} />
                <OrderCalculator/>
            </div> :
            <div>No Menu</div>
    }
}

App.propTypes = {
    menu: React.PropTypes.array
}


export default App;
// ReactDOM.render(<App />, document.getElementById("root"));