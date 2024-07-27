import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";

export default function TicketForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

  const priorityLabels = {
    1: "Low",
    2: "Medium",
    3: "High",
  };

  const clearFrom = () => {
    setTitle("");
    setDescription("");
    setPriority("1");
  };

  const handelSubmit = (e) => {
    clearFrom();
    e.preventDefault();
  };
  return (
    <form onSubmit={handelSubmit} className="ticket-form">
      <div>
        <lable>Title</lable>
        <input
          type="text"
          value={title}
          className="form-input"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>
    </form>
  );
}
