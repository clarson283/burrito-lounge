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

        this.state = {
            // value: '',
            menu: [],
            order: []
        };

        // Reminder that it's always good to bind in the constructor
        this.handleItemAddition = this.handleItemAddition.bind(this);
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

    // addItem(event) {
    //     console.log(event.target.innerHTML);
    //
    //     const itemInfo = this.refs;
    //
    //     console.log(itemInfo);
    //
    //     let item = itemInfo.innerHTML;
    //     this.props.onItemClick(item);
    //
    //     console.log(item);
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

    handleItemAddition(item) {
        this.setState({
            order: [...this.state.order, item.target.innerHTML]
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

        let { menu, order } = this.state;

        return (menu.length) ?
            <div>
                <MenuOptions menu={menu} onItemClick={() => this.handleItemAddition} />
                <OrderCalculator order={order} />
            </div> :
            <div>No Menu</div>
    }
}

App.propTypes = {
    menu: React.PropTypes.array,
    order: React.PropTypes.array,
    onItemClick: React.PropTypes.func
}


export default App;
// ReactDOM.render(<App />, document.getElementById("root"));