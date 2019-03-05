import React, { Component } from 'react';
import MenuItem from './MenuItem.js';

const Menu = ({menuItems}) => {
	return menuItems.map(menuItem => <MenuItem {...menuItem} />);
}

export default Menu;