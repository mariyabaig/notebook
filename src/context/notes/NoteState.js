
import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState=(props)=>{
    const notesInitial = [
        {
          "_id": "6343bf8df49f87e42646454e",
          "user": "63354c9ffd654230687ea78b",
          "title": " First note ",
          "description": "This is my first note",
          "tag": "basic",
          "date": "2022-10-10T06:45:33.342Z",
          "__v": 0
        },
        {
          "_id": "6343cbe51eb1a9bd13294658",
          "user": "63354c9ffd654230687ea78b",
          "title": " First note ",
          "description": "This is my first note",
          "tag": "basic",
          "date": "2022-10-10T07:38:13.327Z",
          "__v": 0
        }
      ]
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

    const [notes, setNotes] = useState(notesInitial)
 return(
   <NoteContext.Provider value= {{notes,setNotes}}>
    {props.children}
   </NoteContext.Provider>
 )
}
export default NoteState;