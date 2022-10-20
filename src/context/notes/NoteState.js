import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "6343bf8df49f87e42646454e",
      "user": "63354c9ffd654230687ea78b",
      "title": " First note ",
     " description": "This is my first note",
     " tag": "basic",
      "date": "2022-10-10T06:45:33.342Z",
      "__v": 0,
    },
    {
      "_id": "6343cbe51eb1a9bd1329658",
      "user": "63354c9ffd654230687ea78b",
      "title": " First note ",
      "description": "This is my first note",
      "tag": "basic",
      "date": "2022-10-10T07:38:13.327Z",
      "__v": 0,
    },
    {
        "_id": "613222f19553781a8ca8d0e08",
        "user": "6131dc5e3e4037cd4734a066",
        "title": "My Title",
        "description": "Please wake up early",
        "tag": "personal",
        "date": "2021-09-03T14:20:09.668Z",
        "__v": 0
      },
      {
        "_id": "61322f119553781a8ca8d0e08",
        "user": "6131dc5e3e4037cd4734a066",
        "title": "My Title",
        "description": "Please wake up early",
        "tag": "personal",
        "date": "2021-09-03T14:20:09.668Z",
        "__v": 0
      },
  ];
  // const s1 = {
  //     "name":"Mariya",
  //     "class":"6a"
  // }
  // const [state, setstate] = useState(s1)
  // const update = ()=>{
  //     setTimeout(()=>{
  //         setstate({
  //             "name":"aariya",
  //     "class":"aa6a"
  //         })
  //     },1000);

  // }

  //{{state,update}}

  const [notes, setNotes] = useState(notesInitial);
  //Add a note
  const addNote = (title , description , tag)=>{
    //TODO API CALL
    console.log("Adding a note")
    const note = {"_id": "6343cbe51eb1a9bd663294658",
    "user": "63354c9ffd654230687ea78b",
    "title": title,
    "description": description,
    "tag": tag,
    "date": "2022-10-10T07:38:13.327Z",
    "__v": 0,};
    setNotes(notes.concat(note))

  }

  //Delete a note
const deleteNote = ()=>{
    
  }
  //Edit a note

  const editNote = ()=>{
    
}
  return (
    <NoteContext.Provider value={{ notes, addNote,deleteNote,editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
