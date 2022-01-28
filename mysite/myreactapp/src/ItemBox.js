import React from 'react';
import ReactDOM from 'react-dom';
import cat from './cat.jpg'

import './ItemBox.css'

export class ItemBox extends React.Component {
	
	constructor(){
		super();
		this.state = {added:false}
	}
	
	
	
	
	render(){
		
		let action_button
		if (this.props.action == "add"){
			action_button = <button class="itembox-add-tp-cart-button" onClick={() => this.props.call(this.props.id) }>Add to Cart</button>
		}
		else if(this.props.action == "remove"){
			action_button = <button class="itembox-add-tp-cart-button" onClick={() => this.props.call(this.props.id) }>Remove from Cart</button>
		}
		else{
			action_button = <div></div>
		}
		
		return (
			<div class="item-box">
				<div class="itembox-title-text">
					{this.props.title}
				</div>
				
				<img src={cat} class="item-box-img" width = "300">
					
				</img>
				
				<div class="itembox-price-text">
					{this.props.price}
				</div>
				
				<div class="itembox-desc-text">
					{this.props.desc}
				</div>
				
				<div>
					{action_button}
				</div>
				
				
				
			</div>
		);
	}
}
