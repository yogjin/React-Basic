import React, {Component} from 'react';

class Counter extends Component{
	constructor(props){
		super(props);
		//state의 초깃값 설정하기
		this.state = {
			number : 0
		};
	};
	render(){
		const {number} = this.state;
		return (
			<div>
				<h1>{number}</h1>
				<button onClick={() => {
						this.setState({number:number+1});
					}}
				>
				+1하기
				</button>
			</div>
		);
	}
}
export default Counter;