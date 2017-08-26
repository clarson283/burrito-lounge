import React from 'react';
import ReactDOM from 'react-dom';
import constants from './constants/appConstants.js';
import appActions from './actions/appActions.js';
// import AppDispatcher from './dispatcher.js';
import ListStore from './stores/listStore.js';

// Load Stylesheets
require('../less/main.less');

export default class App extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     order: props.items
        // }
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
                    <input></input>
                    <button onClick={this.addToList}>Add To List</button>
                    <ul>
                        {listItem}
                    </ul>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));