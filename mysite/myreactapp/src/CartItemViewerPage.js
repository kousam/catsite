import React from 'react';


import './ItemViewer.css'
import {ItemBox} from './ItemBox'

export class CartItemViewerPage extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
            items: [],
            DataisLoaded: false,
        };

	}
	
	componentDidMount() {

		for(let i = 0; i < this.props.cart_nibble.length; i++){
			let item
		
			fetch(this.props.search + "?id=" + this.props.cart_nibble[i])
			
			.then((res) => res.json())
			.then((json) => {
				item = json.results
				this.state.items.push(item[0])

				}
			)
			
		}
		
		this.setState({DataisLoaded:true})
		
		
		this.forceUpdate()
        
	}
	

	
	render(){
		
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) 
			return (
				<div class=''>
					<h1> {this.props.search} </h1> 
				</div> 
			);
		
		let kakka = []
		
		
		for(let i = 0; i < this.state.items.length; i++){
			let item = items[i];
			kakka[i] = <ItemBox id={item.id} title={item.title} price={item.price} desc={item.desc} call={this.props.call} action={this.props.action}/>;
		}
		
		
		
	
		return (	
			<div class="wrapper">
			
				
				{kakka}
			
			
			</div>
		);
	}
}









