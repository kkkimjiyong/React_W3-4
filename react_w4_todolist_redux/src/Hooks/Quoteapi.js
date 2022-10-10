import { useState, useEffect } from "react";

export default function Quoteapi(url) {
  const [word, setWord] = useState("");
  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWord(data.slip);
      });
  }, []);

  return word;
}
