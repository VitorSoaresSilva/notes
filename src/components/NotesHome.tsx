import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { Header } from "@/styles/components/NotesHome";
import Notes from "./Notes";
import { Body, Container } from "@/styles/components/NotesHome";

export interface INotes{
    content: string;
    created_at: string;
    last_edit: string;
    color:string;
}
export default function NotesHome({initialData}){
    const [notes,setNotes] = useState<INotes[]>(initialData? JSON.parse(initialData).notesData : [])
    const colors = ["#f7b32b","#f72c25","#a9e5bb"];
    useEffect(()=>{
        Cookies.set('notesData',JSON.stringify({notesData:notes}))
    },[notes])
    return(
        <Container>
            <Header>
                {colors.map(color=>{
                    return(
                        <button style={{background: color}} onClick={()=>createNewNote(color)} key={color}>+</button>
                    )
                })}
            </Header>
            <Body>
                {notes.map((note,index)=>{
                    return(
                        <Notes 
                        id={index} 
                        note={note} 
                        key={note.created_at + " " + index}
                        exclude={exclude} 
                        edit={edit}
                        />
                    )
                })}
            </Body>
        </Container>
    )
    function exclude(id){
        setNotes(notes.filter((x,index)=> index != id));
    }
    function edit(id,value){
        let state = notes;
        console.log(value)
        state[id].content = value;
        state[id].last_edit = new Date().toISOString();
        setNotes([...state])
    }
    function createNewNote(color){
        console.log(notes)
        let state = notes;
        let newNote = {
            color: color,
            content: "",
            created_at: new Date().toISOString(),
            last_edit: new Date().toISOString()
        } as INotes;
        setNotes([...state,newNote]);
    }
}