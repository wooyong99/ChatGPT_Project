import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = async () => {
    const res = await axios.post("/api/login", {
      id: id,
      password: password,
    });
    if (res.data.success) {
      alert(res.data.msg);
      router.push("/goodDay");
    } else {
      alert(res.data.msg);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
        gap: "20px",
        alignItems: "center",
        position: "relative",
        top: "-100px",
      }}
    >
      <h1>Login</h1>
      <input
        style={{ width: "300px", height: "35px" }}
        placeholder="Enter Your Id"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <input
        style={{ width: "300px", height: "35px" }}
        placeholder="Enter Your Password"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        style={{ width: "300px", height: "35px" }}
        onClick={(e) => login()}
      >
        Login
      </button>
    </div>
  );
}
