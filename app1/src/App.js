import React from "react";

const App = () => {
  const myStyle = {
    color: "red",
    backgroundColor: "aqua",
    padding: "10px",
  };

  return (
    <div>
      <div>
        <h1 style={myStyle}>What is HTML</h1>
        <p style={{ color: "red", backgroundColor: "aqua", padding: "10px" }}>
          HTML stands for Hyper Text Markup Language HTML is the standard markup
          language for creating Web pages HTML describes the structure of a Web
          page HTML consists of a series of elements HTML elements tell the
          browser how to display the content HTML elements label pieces of
          content such as "this is a heading", "this is a paragraph", "this is a
          link", etc.
        </p>
      </div>
      <div>
        <h1 className="title">What is HTML</h1>
        <p id="test">
          HTML stands for Hyper Text Markup Language HTML is the standard markup
          language for creating Web pages HTML describes the structure of a Web
          page HTML consists of a series of elements HTML elements tell the
          browser how to display the content HTML elements label pieces of
          content such as "this is a heading", "this is a paragraph", "this is a
          link", etc.
        </p>
      </div>
    </div>
  );
};

export default App;
