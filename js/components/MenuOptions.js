import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MenuOptions extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // this.setState({value: event.target.value});
    }

    componentDidMount() {
        // ListStore.bind('change', this.listUpdated);
    }

    addItem(event) {
        console.log(event.target.innerHTML);
    }

    render() {

        const menu = this.props;

        console.log(menu);

        return(
            <div>
                <div className="addition-container">
                    <p>Hello Burrito!!</p>
                    <button onClick={this.addItem}>Add To List</button>
                    <ul>
                        {menu.menu[0].map(
                            (elem, index) => <li key={index} className={elem[0]} onClick={this.addItem}>{elem[0]}</li>
                        )}
                    </ul>
                    <button className="add-item" onClick={this.placeOrder}>Add To Order</button>
                </div>
            </div>
        )
    }
}

MenuOptions.propTypes = {
    menu: PropTypes.array.isRequired
}

export default MenuOptions;