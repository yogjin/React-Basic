import React, {useState} from 'react';

const Dinner = () => {
  //입대일
  let sdt = new Date('2020/03/09/00:00:00');
  //지금
  let ndt = new Date('2021/05/14/00:00:00');
  //전역일
  let edt = new Date('2021/12/09/00:00:00');
  //전체기간
  let fullTime = edt-sdt;
  //복무한 기간
  let doTime = ndt-sdt;
  
  return(
    // <div>
    //   <h1>전역일 계산기</h1>
    //   <progress value={(doTime/fullTime)*100} max='100'></progress>
    // </div>
    <div className='container'>
      <div className='top'>
        <div className='user-photo'></div>
        <div className='user-info'></div>
      </div>
      <div className='mid'>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='bottom'>
        <p>전체복무일</p><p></p>
        <div></div>{/*줄*/}
        <p>현재복무일</p><p></p>
        <div></div>{/*줄*/}
        <p>남은복무일</p><p></p>
        <div></div>{/*줄*/}
        <p>다음복무일</p><p></p>
      </div>
    </div>
  );
};

export default Dinner;