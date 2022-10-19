
import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState=(props)=>{
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
 return(
   <NoteContext.Provider value= {{}}>
    {props.children}
   </NoteContext.Provider>
 )
}
export default NoteState;