import React,{ useState } from 'react';

const Say = () => {
  const [text,setText] = useState('');
  const onClickEnter = () => setText('어서오세요!');
  const onClickLeave = () => setText('안녕히가세요.');
  
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{text}</h1>
    </div>
  );
};

export default Say;