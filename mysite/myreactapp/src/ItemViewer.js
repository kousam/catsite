import React from 'react';
import {BrowserRouter,
		Routes,
		Route
		} from "react-router-dom";

import './ItemViewer.css'
import {ItemViewerPage} from './ItemViewerPage'
import {ItemBox} from './ItemBox'
import {ItemViewerNav} from './ItemViewerNav'

import {Test} from './Test'


export class ItemViewer extends React.Component {
	
	
	
	constructor(props){
		super(props);
		this.state = {
            DataisLoaded: false,
			count: 0,
			n_pages: 0,
			
			
        };
	}
	
	componentDidMount() {

        fetch(this.props.search)
		.then((res) => res.json())
		.then((json) => {
			this.setState({
				DataisLoaded: true,
				count: json.count
			});
		});
		
		
		
	}
	

	
	render(){
		
		
		let n_pages = Math.ceil(this.state.count / 10);
		let pages = [];
		
		pages.push(<Route path="/" element={<ItemViewerPage search={this.props.search + "&page=1"} call={this.props.call} action={this.props.action}/>} />);
		
		let paths = []
		
		
		
		for(let i = 1; i <= n_pages; i++){
			let path_str = i.toString() + "/";
			let search_arg = this.props.search + "&page=" + i;
			
			pages.push(<Route path={path_str} element={<ItemViewerPage search={search_arg} call={this.props.call} action={this.props.action} />} />);
			
		};
				
		return (	
			<div>
				<ItemViewerNav n_pages={n_pages}/>
				
				<Routes>
					{pages}
				</Routes>
				
				<ItemViewerNav n_pages={n_pages}/>
				
				
				
				
			</div>
		);
	}
}









