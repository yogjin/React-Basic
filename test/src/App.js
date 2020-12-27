import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

//Component(class)명은 대문자로 시작.
class Subject extends Component{//제목
	render(){//render()함수.
		return (
			//컴포넌트는 하나의 최상위 태그만 사용해야한다.
			//->최상위태그 header
			<header>
				<h1>WEB</h1>
				world wide web!
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
class App extends Component {
 render(){
  return (
	//->최상위태그 div
    <div className="App">
    	<Subject></Subject>
		<TOC></TOC>
    </div>
  );
 }
}

export default App;
