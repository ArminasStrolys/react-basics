import React, { useState } from "react";

export default function StateButton() {
  const [timesClicked, setTimesClicked] = useState(0);
  return (
    <>
      <span>{timesClicked}</span>
      <button onClick={() => setTimesClicked(timesClicked + 1)}>
        Counter (#4)
        {console.log(timesClicked)}
      </button>
    </>
  );
}
