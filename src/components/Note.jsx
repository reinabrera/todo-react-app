import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ACTIONS from "../actions";

function Note({ id, title, content, completed, dispatch } = props) {
  function handleDelete() {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: id } });
  }

  function handleToggle() {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: id } });
  }

  return (
    <div style={{ opacity: completed ? "0.5" : "1" }} id={id} className="note">
      <div className="content-wrapper">
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={handleDelete}>
          <DeleteIcon />
        </button>
        <button onClick={handleToggle}>
          {completed ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
        </button>
      </div>
    </div>
  );
}

export default Note;
