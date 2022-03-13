import React from "react";
import JokeData from "../../data/data.json"
import RenderOne from "../renderOne/RenderOne";

export default function RenderJSON() {

  return(
      <>
  <div>#8</div>
  <p>
      {JokeData.map((jk, index) => {
        return(
          <RenderOne 
          no={jk.id}
          joke1={jk.setup}
          joke2={jk.punchline}
          />
        )
      })}
  </p>
      </>
  )

}