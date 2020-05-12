import React from "react";

const Members = props => {
  return (
    <div className="membersBG">
      {props.members.map(member => (
        <div key={member.id}>
          <h2>{member.title}</h2>
          <p>{member.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Members;

