import React, {Component} from 'react';

class Counter extends Component{
	//state의 초깃값 설정하기
	state = {
		number : 0,
		fixedNumber: 0
	};
	render(){
		const {number,fixedNumber} = this.state;
		return (
			<div>
				<h1>{number}</h1>
				<h2>바뀌지 않는 값: {fixedNumber}</h2>
				<button onClick={() => {
						this.setState((prevState)=>{
							return {
								number : prevState.number+1
							}
						},
						//callback함수로 this.setState가 끝난 후 특정 작업 실행하기.
						()=>{
							console.log('방금 setState가 호출되었다');
							console.log(this.state);
						});
					}}
				>
				+1하기
				</button>
			</div>
		);
	}
}
export default Counter;