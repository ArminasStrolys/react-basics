import React from 'react'
import './emojiList.css'

export default function EmojiList() {
    const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
    const maps = animals.map((animal) => <li>{animal}</li>);
    return (
      <>
        <ul style={{ textAlign: "center", paddingTop: "20px", color: "purple" }}>
          {maps}
        </ul>
      </>
    );
  }