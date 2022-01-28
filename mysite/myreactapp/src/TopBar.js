import React from 'react';

import {Link} from "react-router-dom";

import {GuestButtons} from './navbar/GuestButtons'





export class TopBar extends React.Component{
	constructor(props){
		super(props);
		
		this.state = { signedIn: true
		};
		
		
	};
	
	test(){
		fetch("http://localhost:8000/api/repopulate",
		{
			method:"POST",
			headers:{
			'Accept':'application/json',
			'Content-Type': 'application/json',
			}
		}
		)
	};
	
	
	render(){
		let buttons = []
		if(this.state.signedIn){
			buttons.push(<Link class="nav-button" to="/account" onClick={this.forceUpdate}>Account</Link>)
			buttons.push(<Link class="nav-button" to="/myitems" onClick={this.forceUpdate}>My Items</Link>)
			buttons.push(<Link class="nav-button" to="/cart" onClick={this.forceUpdate}>Shopping Cart ({this.props.itemCount})</Link>)
		}
		else{
			buttons.push(<Link class="nav-button" to="/singin" onClick={this.test}>Sign in</Link>)
			buttons.push(<Link class="nav-button" to="/signup" onClick={this.forceUpdate}>Sign up</Link>)
		}
		
		
		
		
		return(
		<div class="top-cont">
			<header>
			<div class="home-button-cont">
				
				<Link class="home-button" to="/shop" onClick={this.forceUpdate}>
					WebShop
				</Link>
			</div>
			
			<div>
			<input type="text" class="search-input" placeholder="Search">
			</input>
			</div>
			
					
			<nav>
				<ul class="navigation" id="nav">
					<li>
						{buttons}
					</li>
				</ul>
			</nav>
					
			</header>
				
				
				
		</div>
		);
	};
	
}