
import React from 'react';

import {ItemViewer} from './ItemViewer'




export class Home extends React.Component {
	constructor(props){
		super(props);
	}
	
	
	
	render(){
		return (
			<div>
				<div class="default-text-large">
					Enjoy shopping!
				</div>
				
				<div class="horizontal-block">

					
					<ItemViewer search={this.props.search + "?sold=false"} call={this.props.addToCart} action="add"/>
					
					
				</div>
			</div>
		);
	};
		
	
}
	
	










