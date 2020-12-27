import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

//Component(class)명은 대문자로 시작.
class Subject extends Component{
	render(){//render()함수.
		return (
			//컴포넌트는 하나의 최상위 태그만 사용해야한다.
			<header>//->최상위태그 header
				<h1>WEB</h1>
				world wide web!
			</header>
		);
	}
}

class App extends Component {
 render(){
  return (
    <div className="App">//->최상위태그 div
      Hello, React!
    </div>
  );
 }
}

export default App;
