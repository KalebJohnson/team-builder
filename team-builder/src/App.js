import React, { useState } from "react";
import ReactDOM from "react-dom";
import Members from "./Components/Members";
import MemberForm from "./Components/MemberForm";
import "./App.css";

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      title: "Kaleb Johnson",
      body:
        "Some what of a Full-stack web dev"
    },
    {
      id: 1,
      title: "Mike",
      body:
        "UX designer"
    },
    {
      id: 1,
      title: "Justin",
      body:
        "The intern that picks up coffee"
    }
  ]);

  const addNewMembers = member => {
    const newMembers = {
      id: member.length + 1,
      title: member.title,
      body: member.body
    };
    setMembers([...members, newMembers]);
  };

  return (
    <div className="App">
      <h1>My team</h1>
      <MemberForm addNewMembers={addNewMembers} />
      <Members members={members} />
    </div>
  );
}

export default App;
