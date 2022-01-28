import React from 'react';
import {BrowserRouter,
		Routes,
		Route
		} from "react-router-dom";

import './ItemViewer.css'
import {CartItemViewerPage} from './CartItemViewerPage'

import {ItemViewerNav} from './ItemViewerNav'




export class CartItemViewer extends React.Component {
	
	
	
	constructor(props){
		super(props);
		this.state = {
            DataisLoaded: false,
		
        };
	}
	
	
	componentDidMount() {

		
        fetch(this.props.search)
		
		.then((res) => res.json())
		.then((json) => {
			this.setState({
				items: json.results,
				DataisLoaded: true,
				}
			);
			}
		)
	}
	
	fetchItem(){
		fetch(this.props.search)
		
		.then((res) => res.json())
		.then((json) => {
			this.setState({
				items: json.results,
				}
			);
			}
		)
	}

	
	render(){
		
		// multiple values to api refuses to work
		
		let n_pages = Math.ceil(this.props.cart.length / 10);
		let pages = [];
		
		let cart_split = []
		
		let count = 0
		
		for(let i = 0; i < n_pages; i++){
			cart_split.push([])
			for(let j = 0; j < 10; j++){
				if (i * 10 + j >= this.props.cart.length){
					break;
				}
				cart_split[i].push(this.props.cart[i * 10 + j])

			}
		}
		
		
		pages.push(<Route path="/" element={<CartItemViewerPage search={this.props.search} cart_nibble={cart_split[0]} call={this.props.call} action={this.props.action}/>} />);
		
		for(let i = 0; i < n_pages; i++){
			let path_str = (i + 1).toString() + "/";
			let cart_nibble = cart_split[i]
			pages.push(<Route path={path_str} element={<CartItemViewerPage search={this.props.search} cart_nibble={cart_nibble} call={this.props.call} action={this.props.action} />} />);
		}
		
		
		
	
				
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









