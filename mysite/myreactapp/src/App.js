import React from 'react';
import {useState} from 'react' 
import './App.css';
import {ItemViewer} from './ItemViewer'
import {Home} from './Home'
import {Search} from './Search'
import {Account} from './Account'
import {TopBar} from './TopBar'
import {Cart} from './Cart'
import Cookies from 'js-cookie'


import {BrowserRouter,
		Routes,
		Route,
		Link
		} from "react-router-dom";

export class App extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {cart:[],
						n_items:0};
		
		this.count = 0;
		
		this.addToCart=this.addToCart.bind(this);
		this.getCookie=this.getCookie.bind(this);
		this.hasCookie=this.hasCookie.bind(this);

		
		
		
	}
	
	
	hasCookie(cookieName){
		let cookies = [];
		document.cookie.split(';').forEach(function(el) {
			let [key,value] = el.split('=');
			cookies.push(key);
		})
		
		return (cookies.includes(cookieName));
	}
	
	
	getCookie(cookieName) {
		let cookie = {};
		document.cookie.split(';').forEach(function(el) {
			let [key,value] = el.split('=');
			cookie[key.trim()] = value;
		})
		return cookie[cookieName];
	}
	
	
	
	
	getShoppingCart(){
		if(!this.hasCookie("shoppingCart")){
			document.cookie = "shoppingCart=;SameSite=Lax;domain=localhost;path=/";
			
		}

		let item_str_array = this.getCookie("shoppingCart").split(",")
		let item_id_array = []
		
		for(let i = 0; i < item_str_array.length; i++){
			if (item_str_array[i] != ""){
				let item_id = parseInt(item_str_array[i])
				item_id_array.push(item_id)
			}
		}
		
		return item_id_array
		
	}
	
	
	addToCart(id) {
		if(!this.hasCookie("shoppingCart")){
			document.cookie = "shoppingCart=;SameSite=Lax;domain=localhost;path=/";
		}
		
		let item_id_array = this.getShoppingCart();
		
		if (!item_id_array.includes(id)) { 
			item_id_array.push(id)
		}
		document.cookie = "shoppingCart=" + item_id_array.join(",") + ";SameSite=Lax;domain=localhost;path=/";
		
		
		
		
		
		this.forceUpdate()
		
	}
	

	
	
		
	
	render(){
		
		const api_url = "http://localhost:8080/api";
		const api_url_items = api_url + "/items";
		
		this.state.n_items = 1;
		
		const addToCart = (id) => {
			
			if (this.state.cart.indexOf(id) == -1 ) { 
				this.state.cart.push(id)
				this.count += 1;
				this.forceUpdate()
			}
			
		}
		const removeFromCart = (id) =>{
			this.state.cart.remove(id)
		}
			
		
		return (
		
			
			<BrowserRouter>
				<div>
					
					<TopBar itemCount={this.getShoppingCart().length}/>
					
					
					
					<div class='main-cont'>
						<Routes>
							<Route path="/shop/*" element={<Home search={api_url_items} addToCart={this.addToCart}/>} />
							<Route path="/search/*" element={<Search search={api_url_items} addToCart={this.addToCart}/>} />
							<Route path="/cart/*" element={<Cart search={api_url_items} cart={this.getShoppingCart()}addToCart={this.removeFromCart}/>} />
						</Routes>
					
					</div>
					
					
				</div>
				
				
				
			</BrowserRouter>
		);
	}
}


