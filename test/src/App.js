import React, { Component } from 'react';
import TOC from "./components/TOC";
import Subject from "./components/Subject"
import Content from "./components/Content"
import './App.css';

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
