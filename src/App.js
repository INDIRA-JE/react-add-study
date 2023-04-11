import React, { useState } from "react";
import "./App.css";

/** 4. 일반변수 vs useState
        일반변수 : 새로고침 해야 렌더
        useState : 값이 변경되면 자동으로 렌더
 */
// function App() {
//   let [num, setNum] = useState(0);
//   console.log("num : ", num);

//   return (
//     <div className="App">
//       <div></div>
//     </div>
//   );
// }

// export default App;
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

/** 6. useState로 숫자 기록, 리스팅 (게시물 리스팅 처리 연습)
        1. 현재 숫자 출력
        2. 버튼을 눌러서 증가, 감소 수현
        3. 저장 버튼을 눌러서 현재 숫자 저장(저장 시 숫자 초기화)
        4. 리스트로 저장된 숫자 보여주기
 */
function App() {
  const [num, setNum] = useState(0);
  console.log("num : ", num);

  // 숫자가 저장될 공간 [배열]
  const [numList, setNumList] = useState([]);
  console.log("numList : ", numList);
  // numRecoding : 기록 함수
  function numRecoding() {
    setNumList([...numList, num]); // setNulList가 돌아가면 -> [numList 배열]을 넣어주고 -> num(현재숫자)를 저장해준다

    setNum(0);
  }

  return (
    <div className="App">
      <div>현재 숫자 : {num}</div>
      <button onClick={() => setNum(0)}>초기화</button>
      <button onClick={() => setNum(num - 1)}>감소</button>
      <button onClick={() => setNum(num + 1)}>증가</button>
      <button onClick={numRecoding}>기록</button>
      <div>
        <h3>기록 된 숫자</h3>
        <ul>
          {/* 기록된 숫자 표시 & 설명 : numList배열에서 map형식으로 num이라는 이름으로 빼오겠다 => 빼오면 li통해서 num을 넣어준다*/}
          {numList.map((num) => (
            <li>{num}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
