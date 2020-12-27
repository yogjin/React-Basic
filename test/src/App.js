import React, { Component } from 'react';
import TOC from "./components/TOC";
import './App.css';

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
class App extends Component {
 render(){
  return (
	//->최상위태그 div
    <div className="App">
    	<Subject title="WEB" sub="world wide web!"></Subject>
		  <Subject title="React" sub="for UI"></Subject>
		<TOC></TOC>
		<Content title="props써보기" desc="짜잔"></Content>
    </div>
  );
 }
}

export default App;
