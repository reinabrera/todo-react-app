import React, { useReducer, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import ACTIONS from "../actions";
import Notes from "./Notes";

const initialState = JSON.parse(localStorage.getItem("notes")) || [];

function reducer(notes, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...notes, newNote(action.payload.title, action.payload.content)];
    case ACTIONS.DELETE_TODO:
      return notes.filter((note, index) => {
        return index !== action.payload.id;
      });
    case ACTIONS.TOGGLE_TODO:
      return notes.map((note, index) => {
        if (index === action.payload.id) {
          return { ...note, completed: !note.completed };
        }
        return note;
      });
    default:
      break;
  }
}

function newNote(title, content) {
  return { title: title, content: content, completed: false };
}

function App() {
  const [notes, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  },[notes]);

  return (
    <>
      <Header />
      <CreateArea dispatch={dispatch} />
      <Notes data={notes} dispatch={dispatch} />
      <Footer />
    </>
      

  );
}

export default App;
