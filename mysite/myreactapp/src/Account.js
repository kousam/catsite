import React from 'react';

import {ItemViewer} from './ItemViewer'



export class Account extends React.Component {
	constructor(){
		super();
	}
	
	render(){
	let search_str = "?username=".concat(this.props.username)
		return (
			<div>
				
				
				<div class="default-text-large">
					{this.props.username}
				</div>
					
				<div class="horizontal-block">
					
					<div class="default-text">
						Listed Items
					</div>
					
					<ItemViewer search={search_str} />
				</div>
				
				<div class="horizontal-block">
				
					<div class="default-text">
						Bought Items
					</div>
					
					<ItemViewer search={search_str} />
					
				</div>
				
			</div>
		);
	}
		
	
}
	