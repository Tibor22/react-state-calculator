import { useState } from "react";

import "./App.css";

function App() {
  const [leftNum, setLeftNum] = useState(0);
  const [operator, setOperator] = useState("+");
  const [rightNum, setRightNum] = useState(0);
  const [result, setResult] = useState(0);
  const [recall, setRecall] = useState(null);

  function renderCalc(e) {
    if (e.target.classList.contains("numbers")) return;
    const isRight = e.target
      .closest(".numbers")
      .classList.contains("panel-right");
    const calcNum = isRight ? rightNum : leftNum;
    if (e.target.innerText === "." && String(calcNum).includes(".")) return;
    if (
      String(calcNum).length === 1 &&
      calcNum === 0 &&
      e.target.innerText === "."
    ) {
      isRight ? setRightNum("0.") : setLeftNum("0.");
    } else {
      isRight
        ? setRightNum(
            calcNum === 0 ? +e.target.innerText : calcNum + e.target.innerText
          )
        : setLeftNum(
            calcNum === 0 ? +e.target.innerText : calcNum + e.target.innerText
          );
    }
  }
  function renderOperator(e) {
    if (e.target.classList.contains("numbers")) return;
    setOperator(e.target.innerText);
  }
  function renderResult(e) {
    if (e.target.classList.contains("numbers")) return;
    setResult(
      isNaN(eval(leftNum + operator + rightNum))
        ? "Invalid"
        : eval(leftNum + operator + rightNum)
    );
  }

  function clearLeftState(e) {
    e.stopPropagation();
    setLeftNum(0);
  }
  function clearRightState(e) {
    e.stopPropagation();
    setRightNum(0);
  }

  function setLeftRecall(e) {
    e.stopPropagation();
    setLeftNum(recall);
  }
  function setRightRecall(e) {
    e.stopPropagation();
    setRightNum(recall);
  }

  return (
    <div className="calculator">
      <div className="panel ">
        <p>{leftNum}</p>
        <div onClick={renderCalc} className="numbers panel-left">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button>.</button>
          <button onClick={clearLeftState}>Clear</button>
          <button onClick={setLeftRecall}>Recall</button>
        </div>
      </div>

      <div onClick={renderOperator} className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>/</button>
        </div>
      </div>

      <div onClick={renderCalc} className="panel">
        <p>{rightNum}</p>
        <div className="numbers panel-right">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button>.</button>
          <button onClick={clearRightState}>Clear</button>
          <button onClick={setRightRecall}>Recall</button>
        </div>
      </div>
      <div onClick={renderResult} className="panel answer">
        <p>{result}</p>
        <div>
          <button>=</button>

          <button
            onClick={() => setRecall(result === "Invalid" ? 0 : result)}
            className="store"
          >
            Store
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
