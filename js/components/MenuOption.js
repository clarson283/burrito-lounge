import React, {Component} from 'react';
import PropTypes from 'prop-types';

const MenuOption = ({selected={selected}, elem={elem}, onClick=f=>f}) =>
    <li className={(selected) ? 'item selected' : 'item'}
        onClick={onClick}>{elem.name}</li>

MenuOption.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

export default MenuOption;