import React, { Component } from 'react';//필수

//Component(class)명은 대문자로 시작.
class Subject extends Component{//제목
	render(){//render()함수.
		return (
			//컴포넌트는 하나의 최상위 태그만 사용해야한다.
			//->최상위태그 header
			<header>
				<h1>{this.props.title}</h1>
				{this.props.sub}
			</header>
		);
	}
}

//export default로 데이터를 내보냄.
export default Subject;