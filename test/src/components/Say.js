import React,{ useState } from 'react';

const Say = () => {
  const [text,setText] = useState('');
  const onClickEnter = () => setText('어서오세요!');
  const onClickLeave = () => setText('안녕히가세요.');
  
  const [color,setColor] = useState('black');
  
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{color:color}}>{text}</h1>
      <button style={{color:'red'}} onClick={()=>setColor('red')}>
        빨강색
      </button>
      <button style={{color:'blue'}} onClick={()=>setColor('blue')}>
        파란색
      </button>
    </div>
  );
};

export default Say;