import React from 'react';
import ReactDOM from 'react-dom';
// import AppContainer from './containers/AppContainer.js';
import constants from './constants/appConstants.js';
import appActions from './actions/appActions.js';
// import AppDispatcher from './dispatcher.js';
import ListStore from './stores/listStore.js';
import axios from 'axios';
import async from 'babel-polyfill';

import MenuOption from './components/menuOption.js';
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

        // axios.get('/menu')
        //     .then(res => {
        //         let data = res.data,
        //             tableArray = [];
        //
        //         data.map(obj => tableArray.push(
        //             {
        //                 "id": obj.id,
        //                 "name": obj.name,
        //                 "cost": obj.cost
        //             }
        //         ));
        //
        //         console.log('running here');
        //
        //         this.setState({
        //             menu: tableArray
        //         });
        //
        //         console.log(menu);
        //     })
        //     .catch(function(err) {
        //         console.log('Fetching error:', err.message);
        //     });
    }

    componentDidMount() {

        axios.get('/menu')
            .then(res => {
                let data = res.data,
                    tableArray = [];

                data.map(obj => tableArray.push(
                    {
                        "id": obj.id,
                        "name": obj.name,
                        "cost": obj.cost
                    }
                ));

                // console.log(this.state);

                this.setState({
                    menu: tableArray
                });

                // console.log(this.state);

                // console.log('running heree');


                // console.log(this.state.menu);
            })
            .catch(function(err) {
                console.log('Fetching error:', err.message);
            });

        // axios.get('/menu')
        //     .then(res => {
        //         console.log(menu);
        //
        //         let data = res.data,
        //             tableArray = [];
        //
        //         data.map(obj => tableArray.push(
        //             {
        //                 "id": obj.id,
        //                 "name": obj.name,
        //                 "cost": obj.cost
        //             }
        //         ));
        //
        //         this.setState({
        //             menu: tableArray
        //         });
        //     })
        //     .catch(function(err) {
        //         console.log('Error config: ', err.config);
        //         console.log('Fetching error: ', err.message);
        //     });
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

    handleItemAddition(event) {
        // console.log(item);
        // console.log(index);

        // console.log(event);

        const order = [
            ...this.state.order,
            {
                name: event.target.innerHTML//,
                // addons: ,
                // cost:
                // name: item.name,
                // cost: item.cost
            }
        ]

        this.setState({order});

        // isChecked = true;
        //
        // console.log(isChecked);
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
        // let { checked } = this.props;

        return(
            <div>
                <div className="addition-container">
                    <ul>
                        {menu.map(
                            (elem) => <MenuOption name={elem.name} id={elem.id} onItemClick={() => this.handleItemAddition} />
                        )}
                    </ul>
                </div>
                <OrderCalculator order={order} menu={menu} />
            </div>
        )
    }
}

App.propTypes = {
    menu: React.PropTypes.array,
    order: React.PropTypes.array,
    // checked: React.PropTypes.boolean,
    onItemClick: React.PropTypes.func
}


export default App;
// ReactDOM.render(<App />, document.getElementById("root"));