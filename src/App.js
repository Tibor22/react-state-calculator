import { useState } from "react";

import "./App.css";

function App() {
  const [leftNum, setLeftNum] = useState(0);
  const [operator, setOperator] = useState("+");
  const [rightNum, setRightNum] = useState(0);
  const [result, setResult] = useState(0);
  const [recall, setRecall] = useState(null);

  function renderLeftSide(e) {
    if (e.target.innerText === "Clear") return clearLeftState();
    if (e.target.innerText === "Recall") return setLeftNum(recall);
    if (e.target.innerText === "." && String(leftNum).includes(".")) return;
    if (
      String(leftNum).length === 1 &&
      leftNum === 0 &&
      e.target.innerText === "."
    ) {
      setLeftNum("0.");
    } else {
      setLeftNum(
        leftNum === 0 ? +e.target.innerText : leftNum + e.target.innerText
      );
    }
  }

  function renderRightSide(e) {
    console.log(String(rightNum).includes("."));
    if (e.target.innerText === "Clear") return clearRightState();
    if (e.target.innerText === "Recall") return setRightNum(recall);
    if (e.target.innerText === "." && String(rightNum).includes(".")) return;

    if (
      String(rightNum).length === 1 &&
      rightNum === 0 &&
      e.target.innerText === "."
    ) {
      setRightNum("0.");
    } else {
      setRightNum(
        rightNum === 0 ? +e.target.innerText : rightNum + e.target.innerText
      );
    }
  }
  function renderOperator(e) {
    setOperator(e.target.innerText);
  }
  function renderResult(e) {
    setResult(
      isNaN(eval(leftNum + operator + rightNum))
        ? "Invalid"
        : eval(leftNum + operator + rightNum)
    );
  }

  function clearLeftState() {
    setLeftNum(0);
  }
  function clearRightState() {
    setRightNum(0);
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{leftNum}</p>
        <div onClick={renderLeftSide} className="numbers">
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
          <button>Clear</button>
          <button>Recall</button>
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

      <div onClick={renderRightSide} className="panel">
        <p>{rightNum}</p>
        <div className="numbers">
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
          <button>Clear</button>
          <button>Recall</button>
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
