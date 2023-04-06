import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  /* 
    일반 변수 : 새로고침 해야 렌더
    useState : 값이 변경되면 자동으로 렌더
  */

  // 1. useState를 사용한 name 내용 출력
  // let [name, setName] = useState("JE");
  // 2. usdState 필요성 : 버튼을 누를 때마다 증가값이 출력되길 원할 때
  // let num = 1;  // 변경 해준다

  // function numUp() {
  //   num = num + 1;
  //   console.log(num);
  // }
  // 2. useState 사용
  let [num, setNum] = useState(1);
  // 3. 1초마다 1씩 증가 (실행할 메소드, 시간)
  setTimeout(() => setNum((num = num + 1)), 1000);

  return (
    <div className="App">
      <header className="App-header">
        {/* 1. 
        <div>{name}</div> */}
        {/* 2. setNum : 실행되는 순간 렌더링이 되는 것을 알 수 있다*/}
        {/* <div>{num}</div>
        <button
        onClick={() => {
          setNum((num = num + 1));
        }}
        >
        버튼
      </button> */}
        {/* 3.  */}
        <div>{num}</div>
      </header>
    </div>
  );
}

export default App;
