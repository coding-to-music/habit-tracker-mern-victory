import React, { useState, useEffect } from "react";

function FetchQuote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  // var quotes = "";

  useEffect(() => {
    fetchQuote();
    //This commented code was another API that provides 1 image per day, keeping it here for my reference
    // const intervalID = setInterval(() => {
    //   fetchQuote();
    // }, 0.5 * 60 * 60 * 1000);
    // return () => {
    //   clearInterval(intervalID);
    // };
  }, []);

  function fetchQuote() {
    // fetch("http://quotes.rest/qod.json?category=inspire")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setQuote(data.contents.quotes[0].quote);
    //     setAuthor(data.contents.quotes[0].author);
    //     setImgSrc(data.contents.quotes[0].background);
    //     console.log(data);
    //   });
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        chooseRandomQuote(data);

        // setImgSrc(data.contents.quotes[0].background);
      });
  }
  function chooseRandomQuote(data) {
    // console.log(data.length);
    let randNum = Math.floor(Math.random() * (data.length - 1));
    while (randNum === 13 || randNum === 14)
      randNum = Math.floor(Math.random() * (data.length - 1));
    setQuote(data[randNum].quote);
    setAuthor(data[randNum].author);
  }

  return (
    <>
      <h5>
        <i>"{quote}"</i>
      </h5>
      <p>- {author}</p>
      <img src={imgSrc} alt="" />
    </>
  );
}

export default FetchQuote;
