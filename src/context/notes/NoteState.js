import NoteContext from "./noteContext";
import { useState, useContext } from "react";
const NoteState = (props) => {
  //url
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q",
      },
    });
    const json = response.json();
    console.log(json);
    setNotes(json);
  };

  //Add a note
  const addNote = async (title, description, tag) => {
    //API call to add
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzNTRjOWZmZDY1NDIzMDY4N2VhNzhiIn0sImlhdCI6MTY2NTM4MjIxM30.Px2GgLZH4AyL4ZB_CQ8_PrIys1D2ttZU3ALI2nCMD3I",
      },

      body: JSON.stringify({ title, description, tag }),
    });
    // const json = response.json();

    console.log("Adding a note");
    const note = {
      "_id": "6343cbe51eb1a9bd663294658",
      "user": "63354c9ffd654230687ea78b",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-10-10T07:38:13.327Z",
      "__v": "0",
    };
    setNotes(notes.concat(note));
  };

  //Delete a note
  const deleteNote = async (id) => {
    //API call to delete
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method:'DELETE',

      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
      
      },
    });
    const json = response.json();
    console.log(json)

    //deleting at client side
    console.log("deleting a note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //Edit a note

  const editNote = async (id, title, description, tag) => {
    //API call to edit
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzNTRjOWZmZDY1NDIzMDY4N2VhNzhiIn0sImlhdCI6MTY2NTM4MjIxM30.Px2GgLZH4AyL4ZB_CQ8_PrIys1D2ttZU3ALI2nCMD3I",
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    //client side
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider
      value={{ notes, getNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
