import React from "react";

function Heading() {
  const date = new Date();
  const currentTime = date.getHours();

  let greeting;

  const customStyle = {
    color: "",
  };

  if (currentTime < 12) {
    greeting = "Good morning";
    customStyle.color = "green";
  } else if (currentTime < 18) {
    greeting = "Good afternoon";
    customStyle.color = "red";
  } else {
    greeting = "Good evening";
    customStyle.color = "blue";
  }
  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;
