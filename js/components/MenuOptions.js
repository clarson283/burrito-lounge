import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MenuOptions extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     order: props.items
        // }
        // this.state = {
        //     value: '',
        //     menu: [],
        //     order: []
        // };

        // console.log(this.state);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    componentDidMount() {
        // ListStore.bind('change', this.listUpdated);
    }

    render() {

        return(
            <div>
                <div className="addition-container">
                    <p>Hello Burrito!!</p>
                    <input onChange={this.handleChange} value={this.state.value}></input>
                    <button onClick={this.addItem}>Add To List</button>
                    <ul>
                        {this.props.menu.map((item, key) => {
                            return <li key={key} onClick={this.addItem}>{item.name}</li>
                        })}
                    </ul>
                    <button className="add-item" onClick={this.placeOrder}>Add To Order</button>
                </div>
            </div>
        )
    }
}

MenuOptions.propTypes = {
    menu: PropTypes.string.isRequired
}

export default MenuOptions;