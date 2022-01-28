import React from 'react';

import {Link} from "react-router-dom";

export class ItemViewerNav extends React.Component {
	
	constructor(props){
		super(props);
		
		
	}
	
	
	render(){
		
		const buttons = [];
		
		for(let i = 1; i <= this.props.n_pages; i++){
			let n = i.toString();
			buttons.push(<Link class="item-viewer-nav-button" to={n} onClick={this.forceUpdate}>{n}</Link>)
		};
		
		return (
			<div class="nav">
				{buttons}
			</div>
		);
	}
}
