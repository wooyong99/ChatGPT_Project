import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";

export default function GoodDay() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");
  const [arr, setArr] = useState([]);

  //useEffect에는 2개의 파라미터가 들어가는데 첫번쨰는 function, 두번째는 dependency
  useEffect(() => {
    console.log(userInput);
  }, [userInput]);
  useEffect(() => {
    if (!result) {
      return;
    }
    if (result === "") {
      return;
    }
    setArr((prev) => [...prev, { txt: result, isMe: false }]);
  }, [result]);

  const submit = async () => {
    if (userInput.trim().length === 0) {
      return;
    }
    if (!userInput) {
      return;
    }
    if (userInput === "") {
      return;
    }
    setUserInput("");
    setArr((prev) => [...prev, { txt: userInput, isMe: true }]);
    const url = "/api/hello";
    const res = await axios.post(url, {
      userInput: userInput,
    });
    console.log("결과 : " + res.data.result);
    setResult(res.data.result);
    return true;
  };
  const RenderChatRow = ({ txt, isMe, index }) => {
    if (isMe) {
      return (
        <div style={{ textAlign: "right", margin: "10px" }}>
          <span
            style={{
              fontSize: "2.5rem",
              display: "inline-block",
              marginRight: "15px",
            }}
          >
            <FontAwesomeIcon icon={faUser} />
          </span>
          {/* <strong>Question</strong> : */}
          {txt}
        </div>
      );
    } else {
      return (
        <>
          <div style={{ margin: "10px" }}>
            <span
              style={{
                fontSize: "2.5rem",
                display: "inline-block",
                marginRight: "15px",
              }}
            >
              <FontAwesomeIcon icon={faUserSecret} />
            </span>
            {/* <strong>Answer</strong> : */}
            {txt}
          </div>
          <hr />
        </>
      );
    }
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
          value={userInput}
          style={{ width: 400, height: 40, paddingLeft: "7px" }}
          onChange={(e) => setUserInput(e.target.value)}
        ></input>
        <button onClick={(e) => submit()}>
          <FontAwesomeIcon
            icon={faSearch}
            style={{ fontSize: "18px", padding: "5px" }}
          />
        </button>
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
        <div>
          {arr.map((obj, index) => (
            <RenderChatRow txt={obj.txt} isMe={obj.isMe} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
