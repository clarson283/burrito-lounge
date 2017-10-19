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
            menu: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    addItem() {
        let url = '/orders',
            data = { order: $('input').val() };

        console.log(url);
        console.log(data);

        $.post(url, data);
    }

    // const menuArray = function() {
    //     $.get('/menu');
    // }

    componentDidMount() {
        // ListStore.bind('change', this.listUpdated);

        console.log(this.state);

        $.get('/menu')
            .then(async res => {
                const data = await res;
                console.log(data);
                this.setState({
                    menu: data
                })
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

        // let listAll = ListStore.getAll();
        //
        // let listItem = listAll.map( function(item) {
        //     return <li key={item.id}>{item.name}</li>
        // });

        let listItem = 'blah';

        // let menuList = this.state.menu.map(function(item, i){
        //     return <li key={i}>{item}</li>
        // }.bind(this))

        return(
            <div>
                <div className="addition-container">
                    <p>Hello Burrito!!</p>
                    <ul>
                    </ul>
                    <input onChange={this.handleChange} value={this.state.value}></input>
                    <button onClick={this.addItem}>Add To List</button>
                    <ul>
                        {listItem}
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
// ReactDOM.render(<App />, document.getElementById("root"));