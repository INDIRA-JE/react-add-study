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
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

/** 6. useState로 숫자 기록, 리스팅 (게시물 리스팅 처리 연습)
        1. 현재 숫자 출력
        2. 버튼을 눌러서 증가, 감소 수현
        3. 저장 버튼을 눌러서 현재 숫자 저장(저장 시 숫자 초기화)
        4. 리스트로 저장된 숫자 보여주기
 */
// function App() {
//   const [num, setNum] = useState(0);
//   console.log("num : ", num);

//   // 숫자가 저장될 공간 [배열]
//   const [numList, setNumList] = useState([]);
//   console.log("numList : ", numList);
//   // numRecoding : 기록 함수
//   function numRecoding() {
//     setNumList([...numList, num]); // setNulList가 돌아가면 -> [numList 배열]을 넣어주고 -> num(현재숫자)를 저장해준다

//     setNum(0);
//   }

//   return (
//     <div className="App">
//       <div>현재 숫자 : {num}</div>
//       <button onClick={() => setNum(0)}>초기화</button>
//       <button onClick={() => setNum(num - 1)}>감소</button>
//       <button onClick={() => setNum(num + 1)}>증가</button>
//       <button onClick={numRecoding}>기록</button>
//       <div>
//         <h3>기록 된 숫자</h3>
//         <ul>
//           {/* 기록된 숫자 표시 & 설명 : numList배열에서 map형식으로 num이라는 이름으로 빼오겠다 => 빼오면 li통해서 num을 넣어준다*/}
//           {numList.map((num) => (
//             <li>{num}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
/* 7. 함수 분리
        - App 변수에 Style 바로 적용
        - 기록 되는 내용을 각각의 함수에 적용 후 적용된 함수를 사용
*/

// 1. 계산함수 : RecordForm 분리 적용
// 4. 넘겨준 데이터 받아오기 {setNumList}
// const RecordForm = ({ numList, setNumList }) => {
//   const [num, setNum] = useState(0);
//   console.log("2 >> num : ", num);
//   console.log("numList : ", numList);

//   // function numRecoding() {
//   //   setNumList([...numList, num]);
//   //   console.log(">> setNumList : ", setNumList);

//   //   setNum(0);
//   // }

//   return (
//     <div>
//       <h3>현재 숫자 : {num}</h3>
//       <button onClick={() => setNum(0)}>초기화</button>
//       <button onClick={() => setNum(num - 1)}>감소</button>
//       <button onClick={() => setNum(num + 1)}>증가</button>
//       {/* hr : 구분선 */}
//       <hr />
//       {/* 4. 데이터 받아오기 setNumList([...numList, num]) */}
//       {/* <button onClick={numRecoding}>기록</button> */}
//       <button onClick={() => setNumList([...numList, num])}>기록</button>
//       {/* <RecordList num={num} /> */}
//       <button onClick={() => setNumList([])}>기록 초기화</button>
//     </div>
//   );
// };
// // 1. 출력 부분 : RecordList 분리 적용
// // 4. 넘겨준 데이터 받아오기 {numList}
// const RecordList = ({ numList }) => {
//   return (
//     <div>
//       <h3>기록된 숫자</h3>
//       {/* 출력 3항 연산자 적용 */}
//       {numList.length > 0 ? (
//         <div>{numList.map({ numList })}</div>
//       ) : (
//         <div>기록 없음</div>
//       )}
//     </div>
//   );
// };

// const App = () => {
//   // 2. 부모(App)에서 선언 : 기록될 숫자 useState는 RecordForm과 RecordList에서도 사용 해야 하기 때문에 -> 공통으로 사용 할 수 있는 곳에 만들어줌
//   const [numList, setNumList] = useState([]);
//   console.log("1 >> numList : ", numList);

//   return (
//     <div style={{ margin: "300px auto", textAlign: "center" }}>
//       {/* 3. 숫자 기록 앱 -> 분리 함수 적용 */}
//       {/* 3. 부모에서 -> 자식으로 넘겨줌 : setNumList={setNumList} */}
//       {/* 3. 계산 부분 numList, setNumList */}
//       <RecordForm numList={numList} setNumList={setNumList} />
//       {/* 3. 출력 부분 numList */}
//       <RecordList numList={numList} />
//     </div>
//   );
// };

// export default App;
