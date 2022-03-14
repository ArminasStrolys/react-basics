import React from "react";
import "./usersApi.css"
// import UserApi from "../userApi/UserApi";

export default function UsersApi(props) {

  return (
    <>
      {/* <div>UsersApi#9</div> */}
      {/* <button onClick={handleClick} className="btnn">Fetch random</button> */}
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={props.avatar}
              alt="Avatar"
              style={{width:"200px",height:"200px"}}
            />
          </div>
          <div className="flip-card-back">
            <h1>{props.name} {props.surname}</h1>
            <p style={{top:"15px"}}>Title: {props.title}</p>
            <p style={{top:"30px"}}>Skill: {props.skill}</p>
          </div>
        </div>
      </div>
    </>
  );
}
