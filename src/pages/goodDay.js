import { useState, useEffect } from "react";
import axios from "axios";

export default function GoodDay() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");
  const [arr, setArr] = useState([]);

  //useEffect에는 2개의 파라미터가 들어가는데 첫번쨰는 function, 두번째는 dependency
  useEffect(() => {
    console.log(userInput);
  }, [userInput]);

  const submit = async () => {
    const url = "/api/hello";
    const res = await axios.post(url, {
      userInput: userInput,
    });
    setArr([...arr, res.data.result]);
    console.log("결과 : " + res.data.result);
    setResult(res.data.result);
    return true;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
          borderBottom: "1px solid gray",
        }}
      >
        <input
          style={{ width: 400, height: 40 }}
          onChange={(e) => setUserInput(e.target.value)}
        ></input>
        <button onClick={(e) => submit()}>Send</button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: 100,
          flexGrow: 1,
          padding: "20px 100px",
        }}
      >
        <ul>
          {arr.map((answer, index) => (
            <>
              <li key={index} style={{ padding: "10px" }}>
                Result : {answer}
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
