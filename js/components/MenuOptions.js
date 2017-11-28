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

    render() {

        const menu = this.props;

        // console.log(isChecked);

        console.log(menu);

        return(
            <div>
                <div className="addition-container">
                    <p>Hello Burrito!!</p>
                    <ul>
                        {menu.menu.map(
                            (elem, index) => <li key={index} className={elem.name}  onClick={this.props.onItemClick({elem})}>{elem.name}</li>
                        )}
                    </ul>
                    <button className="add-item" onClick={this.placeOrder}>Add To Order</button>
                </div>
            </div>
        )
    }
}

MenuOptions.propTypes = {
    menu: PropTypes.array.isRequired,
    onItemClick: PropTypes.func
}

MenuOptions.defaultProps = {
    onItemClick: f=>f
}

export default MenuOptions;