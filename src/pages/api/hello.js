// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const axios = require("axios");
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export default async function handler(req, res) {
  let userInput = req.body.userInput;

  const url = "https://api.openai.com/v1/completions";
  const response = await axios.post(
    url,
    {
      model: "text-davinci-003", // 알고리즘 모델
      prompt: userInput,
      max_tokens: 100, // 결과값 글자의 최대숫자
      n: 1,
      stop: null,
      temperature: 0.5, // 수치가 낮을수록 정확한 답변만 답해줌
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
    }
  );
  res.status(200).json({ result: response.data.choices[0].text });
}
