import React from "react";

export default function Mapping() {
  const animals = ["dog", "cat", "chicken", "cow", "horse"];
  const maps = animals.map((animal, index) => 
  <li>{animal}key={index};</li>);

  return (
    <>
      <ul style={{ textAlign: "center", paddingTop: "20px", color: "purple" }}>
        {maps}
      </ul>
    </>
  );
}
