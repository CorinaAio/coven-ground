import React, { Component } from 'react';
import Menu from '../menu/Menu.js';

const Header = ({menuItems}) => {
	return (
		<div className="cover-header">
			<Menu menuItems={menuItems}/>
		</div>
	);
}

export default Header;