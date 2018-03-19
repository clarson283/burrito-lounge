import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MenuOption from './MenuOption.js';

class MenuOptions extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        // this.handleItemAddition = this.handleItemAddition.bind(this);
    }

    handleChange(event) {
        // this.setState({value: event.target.value});
    }

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

        const { menu, elem, selected } = this.props;

        console.log(selected);

        return (
            <div>
                <div className="addition-container">
                    <ul>
                        {menu.map(
                            (elem, index) => <MenuOption key={index} selected={menu[index].selected} elem={elem} onClick={() => this.props.onItemClick(elem.id)} />
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

MenuOptions.propTypes = {
    menu: PropTypes.array.isRequired,
    selected: PropTypes.bool,
    onItemClick: PropTypes.func
}

MenuOptions.defaultProps = {
    onItemClick: f=>f
}

export default MenuOptions;