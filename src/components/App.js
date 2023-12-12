import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [input, setInput] = useState("");

  return (
    <div>
        {/* Do not remove the main div */}
        <label for="name">Enter your name:</label>
        <input type="text" onChange = {(event) => setInput(event.target.value)} name="name" required></input>
        {input ? <p>Hello {input}!</p> : ""}
    </div>
  )
}

export default App
