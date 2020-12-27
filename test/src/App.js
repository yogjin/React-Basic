import React, { Component } from 'react';
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
class Content extends Component{
	render(){
		return(
			<article>
				<h2>HTML</h2>
				HTML배우기~
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
		<Content></Content>
    </div>
  );
 }
}

export default App;
