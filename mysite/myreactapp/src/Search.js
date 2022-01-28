import React from 'react';

import {ItemViewer} from './ItemViewer'


import {Routes,
		Route
		} from "react-router-dom";

export class Search extends React.Component {
	constructor(props){
		super(props);
	}
	
	
	
	render(){
		
		let path = window.location.pathname;
		let path_split = path.split("/");
		
		
		let term_index = path_split.indexOf("search") + 1;
		
		let search = ""
		
		let search_term = "";
		let path_str = "/"
		if(term_index == path.split.length){
			search_term = path_split[term_index]
			search = this.props.search + "/?search=" + search_term + "&sold=false";
			path_str = search_term + path_str + "*"
			
		}
		else{
			search = this.props.search + "/?sold=false";
		};
		
		
		
		
		
		return (
			<div>
				<div class="default-text-large">
					Your searched: "{search_term}" 
				</div>
				
				<div class="horizontal-block">
					<Routes>
						<Route path={path_str} element=<ItemViewer search={search} call={this.props.addToCart} action="add"/> />
					</Routes>
				</div>
			</div>
		);
	};
		
	
}