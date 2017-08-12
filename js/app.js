import React from 'react';
import ReactDOM from 'react-dom';
import AppDispatcher from './dispatcher.js';

// Load Stylesheets
require('../less/main.less');

export default class App extends React.Component {

    addToList(param) {
        AppDispatcher.dispatch({
            actionName: constants.actions.ADD_ITEM,
            param
        });
    }

    render() {
        return(
            <div>
                <div className="addition-container">
                    <p>Hello Burrito!!</p>
                    <input></input>
                    <button onClick={this.addToList}>Add To List</button>
                    <ul></ul>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));