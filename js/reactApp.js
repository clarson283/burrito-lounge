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

// Load Stylesheets
require('../less/main.less');

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // value: '',
            menu: []
            // order: []
        };
    }

    componentWillMount() {

        axios.get('/menu')
            .then(res => {
                let data = res;

                console.log('premount settings');

                this.setState({
                    menu: data //res
                });

                // console.log(this.state.menu);
                // console.log(typeof this.state.menu);
            })
            .catch(function(err) {
                console.log('Fetching error: ', err.message);
            });

        // axios.get('/menu')
        //     .then(response => response.json())
        //     .then(json => json.map(item => item.name))
        //     .then(menu =>
        //         this.setState({menu})
        //     )
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

    addItem() {

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
        console.log(this.state);

        return (menu.length) ?
            <div>
                <div className="order-container">
                    <p>Order Stuff:</p>
                    <ul>
                        {menu.data.map(
                            (elem, index) => <li key={index}>{elem}</li>
                        )}
                    </ul>
                </div>
            </div> :
            <div>No Menu</div>
    }
}

App.propTypes = {
    menu: React.PropTypes.object
}

// App.setDefaultProps = {
//     order: ['burrito']
// }

export default App;
// ReactDOM.render(<App />, document.getElementById("root"));