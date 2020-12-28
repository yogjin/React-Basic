import React, { Component } from 'react';//필수

class Content extends Component{
	render(){
		return(
			<article>
				<h2>{this.props.title}</h2>
				{this.props.desc}
			</article>
		);
	}
}

export default Content;