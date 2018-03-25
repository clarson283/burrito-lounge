import React, {Component} from 'react';
import PropTypes from 'prop-types';
import OrderItem from './OrderItem.js';

// const OrderItem = ({name, addons, cost}) => {
//     <li>{name}</li>
// }

class OrderCalculator extends Component {

    render() {
        const order = this.props;

        // console.log(order.order);

        return(
            <div>
                <div className="order-container">
                    <p>Order Calculator</p>
                    <p>Quantity:</p>
                    <ul>
                        {order.order.length ? order.order.map(
                            (elem, index) =>
                                <OrderItem index={index} item={elem} />
                        ) : <li>No Order Items</li>}
                    </ul>
                </div>
            </div>
        )
    }
}

OrderCalculator.propTypes = {
    order: PropTypes.array.isRequired,
}

export default OrderCalculator;