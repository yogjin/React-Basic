import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: ''
  }
  
	render() {
    return(
      <div>
        <h1>이벤트연습</h1>
        <input 
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요"
          value={this.state.message}
          onChange={
            (e)=>{
              this.setState({
                message:e.target.value
              })
            }
          }
          ></input>
        {/*버튼을 누를때 state(message) 출력후 초기화*/}
        <button onClick={
            ()=>{
              alert(this.state.message);
              this.setState({
                message:''
              });
            }
          }>확인</button>
      </div>
    );
  }
}
export default EventPractice;