import React, { useState } from "react";

const MemberForm = props => {

  const [members, setMembers] = useState({
    title: "",
    body: ""
  });

  const handleChanges = event => {
    setMembers({ ...members, [event.target.name]: event.target.value });
    console.log(members);
  };
  const submitForm = event => {
    event.preventDefault();
    props.addNewMembers(members);
    setMembers({ title: "", body: "" });
  };
  return (
    <form className="MemberForm" onSubmit={submitForm}>
      <label htmlFor="title">Member Name</label>
      <input
        onChange={handleChanges}
        id="title"
        type="text"
        name="title"
        placeholder="Title..."
        value={members.title}
      />
      <label htmlFor="member">Role</label>
      <textarea
        onChange={handleChanges}
        id="note"
        name="body"
        value={members.body}
      />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default MemberForm;
