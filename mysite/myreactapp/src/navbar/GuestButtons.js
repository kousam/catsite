import React from 'react';

import {Link} from "react-router-dom";

export class GuestButtons extends React.Component {
	constructor(props){
		super(props);
	}
	
	
	render(){
		return(
			<ul>
				<Link class="nav-button" to="/singin" onClick={this.test}>Sign in</Link>
				<Link class="nav-button" to="/signup" onClick={this.forceUpdate}>Sign up</Link>
			
			</ul>
			
			
		
		)
		
	}
	
}