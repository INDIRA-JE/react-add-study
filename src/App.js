import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [num, setNum] = useState(0);
  console.log("num : ", num);

  /**
   * 일반변수 : 새로고침 해야 렌더
   * useState : 값이 변경되면 자동으로 렌더
   */

  return (
    <div className="App">
      <header className="App-header">
        <div></div>
        <button onClick={() => setNum((num = num + 1))}>버튼</button>
      </header>
    </div>
  );
}

export default App;
