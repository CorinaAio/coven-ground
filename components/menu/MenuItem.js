import React, { Component } from 'react';
import Link from 'next/link';

const MenuItem = ({value, link}) => {
	return <Link href={link}><a>{value}</a></Link>
}

export default MenuItem;