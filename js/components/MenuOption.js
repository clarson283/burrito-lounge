import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MenuOption extends Component {

    constructor(props) {
        super(props);

        // this.handleChange = this.handleChange.bind(this);
        // this.handleItemAddition = this.handleItemAddition.bind(this);
    }

    // handleChange(event) {
    //     // this.setState({value: event.target.value});
    // }

    componentDidMount() {
        // ListStore.bind('change', this.listUpdated);
    }

    // handleItemAddition(index, item) {
    //     console.log(index);
    //     console.log(item);
    //
    //     const order = [
    //         ...this.state.order,
    //         {
    //             name: item.target.innerHTML//,
    //             // addons: ,
    //             // cost:
    //             // name: item.name,
    //             // cost: item.cost
    //         }
    //     ]
    //
    //     this.setState({order});
    //
    //     // isChecked = true;
    //     //
    //     // console.log(isChecked);
    // }

    render() {

        const { name } = this.props;

        // console.log(isChecked);

        console.log(menu);

        return(
            <li key={key} className={name} onClick={this.props.onItemClick()}>{name}</li>
        )
    }
}

MenuOption.propTypes = {
    // menu: PropTypes.array.isRequired,
    onItemClick: PropTypes.func
}

MenuOption.defaultProps = {
    onItemClick: f=>f
}

export default MenuOption;