import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const login = () => {
    console.log("로그인");
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
        placeholder="email"
        onChange={(e) => {}}
      />
      <input
        style={{ width: "300px", height: "35px" }}
        placeholder="password"
        type="password"
        onChange={(e) => {}}
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
