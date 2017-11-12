import React, {Component} from 'react';
import PropTypes from 'prop-types';

class OrderCalculator extends Component {

    render() {
        const order = this.props;

        return(
            <div>
                <div className="order-container">
                    <p>Order Calculator</p>
                    <p>Quantity:</p>
                    <ul>
                        {order.order.length ? order.order.map(
                            (elem, index) => <li key={index} className={elem}>{elem}</li>
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