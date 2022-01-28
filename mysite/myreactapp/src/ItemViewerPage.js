import React from 'react';


import './ItemViewer.css'
import {ItemBox} from './ItemBox'

export class ItemViewerPage extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
            items: [],
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
	
	static getDerivedStateFromProps(props, state) {
		return {title: props.favcol };
	}
	
	render(){
		
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) 
			return (
				<div class=''>
					<h1> {this.props.search} </h1> 
				</div> 
			);
				
		return (	
			<div class="wrapper">
			{
				
				items.map((item) => (
					
					<ItemBox id={item.id} title={item.title} price={item.price} desc={item.desc} call={this.props.call} action={this.props.action}/>
					
				))
			}
			
			
			</div>
		);
	}
}









