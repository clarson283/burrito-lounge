import React from 'react';
import ReactDOM from 'react-dom';
// import AppContainer from './containers/AppContainer.js';
import constants from './constants/appConstants.js';
import appActions from './actions/appActions.js';
// import AppDispatcher from './dispatcher.js';
import ListStore from './stores/listStore.js';
import $ from 'jquery';

// Load Stylesheets
require('../less/main.less');

class App extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     order: props.items
        // }
        this.state = {value: ''};
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

    // componentDidMount() {
    //     ListStore.bind('change', this.listUpdated);
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

        // let listAll = ListStore.getAll();
        //
        // let listItem = listAll.map( function(item) {
        //     return <li key={item.id}>{item.name}</li>
        // });

        let listItem = 'blah';

        return(
            <div>
                <div className="addition-container">
                    <p>Hello Burrito!!</p>
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