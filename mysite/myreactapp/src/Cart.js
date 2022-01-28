


import React from 'react';

import {CartItemViewer} from './CartItemViewer'




export class Cart extends React.Component {
	constructor(props){
		super(props);
	}
	
	
	
	render(){
		

		
		return (
			<div>
				<div class="default-text-large">
					Your Shopping Cart!
				</div>
				
				<div class="horizontal-block">
					
					
					<CartItemViewer search={this.props.search} cart={this.props.cart} call={this.props.call} action="remove"/>
					
					
				</div>
			</div>
		);
	};
		
	
}










