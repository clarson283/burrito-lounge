import React from 'react';
import ReactDOM from 'react-dom';
// import AppContainer from './containers/AppContainer.js';
import constants from './constants/appConstants.js';
import appActions from './actions/appActions.js';
// import AppDispatcher from './dispatcher.js';
import ListStore from './stores/listStore.js';
import $ from 'jquery';
import async from 'babel-polyfill';

// Load Stylesheets
require('../less/main.less');

class App extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     order: props.items
        // }
        this.state = {
            value: '',
            menu: [],
            order: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    placeOrder() {
        let url = '/orders',
            data = {
                order: $('input').val(),
                quantity: 1
            };

        $.post(url, data);

        this.setState = {(
            order: data
        )}
    }

    addItem() {

    }

    // const menuArray = function() {
    //     $.get('/menu');
    // }

    componentDidMount() {
        // ListStore.bind('change', this.listUpdated);

        $.get('/menu')
            .then(async res => {
                const data = await res;

                this.setState({
                    menu: data
                });

                console.log(this.state.menu);
                console.log(typeof this.state.menu);
            })
            .catch(function(err) {
                console.log(err.message);
            });
    }

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
        return(
            <div>
                <div className="addition-container">
                    <p>Hello Burrito!!</p>
                    <ul>
                    </ul>
                    <input onChange={this.handleChange} value={this.state.value}></input>
                    <button onClick={this.addItem}>Add To List</button>
                    <ul>
                        {this.state.menu.map((item, key) => {
                            return <li key={key} onClick={this.addItem}>{item.name}</li>
                        })}
                    </ul>
                    <button className="add-item" onClick={this.placeOrder}>Add To Order</button>
                </div>
            </div>
        );
    }
}

export default App;
// ReactDOM.render(<App />, document.getElementById("root"));