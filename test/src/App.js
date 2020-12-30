import React, { Component } from 'react';
import TOC from "./components/TOC";
import Subject from "./components/Subject"
import Content from "./components/Content"
import './App.css';

class App extends Component {
	//어떤 Component가 실행될때 render()보다 먼저 실행되면서
	//그 Component를 초기화 시켜주고싶은 코드는 이 constructor안에 작성한다.
	constructor(props){
		super(props);
		this.state = {
			subject:{title:'WEB', sub:'World Wide Web!'}//객체생성
		}
	}
	render(){
		return (
			//->최상위태그 div
    		<div className="App">
    			<Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
				<Subject title="React" sub="for UI"></Subject>
				<TOC></TOC>
				<Content title="props써보기" desc="짜잔"></Content>
    		</div>
  		);
 	}
}
export default App;
