import React, { useState } from "react";
import "./style.css";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //const [flag,setFlag]=useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("you'v submitted the form");
    setName("");
    setEmail("");
  };
  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          name="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default App;
