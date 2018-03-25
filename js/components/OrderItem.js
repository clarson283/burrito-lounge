import React, {Component} from 'react';
import PropTypes from 'prop-types';

class OrderItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 1
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState(prevState => ({ quantity: prevState.quantity + 1 }));
    }

    decrement() {
        if (this.state.quantity != 0) {
            this.setState(prevState => ({ quantity: prevState.quantity - 1 }));
        }
    }

    render() {

        const { index, item } = this.props;
        const quantity = this.state;

        return(
            <li key={index}>
                {item.addedItem.name}
                <span className="quantity">
                    <i className="minus" onClick={this.decrement}></i>
                    {quantity.quantity}
                    <i className="plus" onClick={this.increment}></i>
                </span>
            </li>
        )
    }
}

export default OrderItem;