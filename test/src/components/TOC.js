import React, { Component } from 'react';//필수

class TOC extends Component{//목차
	render(){
		return(
			<nav>		
				<ul>
					<li><a href="1.html">HTML</a></li>
					<li><a href="2.html">CSS</a></li>
					<li><a href="3.html">JavaScript</a></li>
				</ul>
			</nav>
		);
	}
}