import { Body, Container, Header } from "@/styles/components/Notes";
import { useState } from "react";
import { INotes } from "./NotesHome";
import { BiTrash, BiPencil,BiSave } from "react-icons/bi";
interface Props{
    note: INotes,
    id: number,
    exclude: Function,
    edit: Function
}

export default function Notes({note,id,exclude,edit}: Props){
    const [editMode,setEditMode] = useState(false);
    const [editedValue,setEditedValue] = useState("");
    return (
        <Container color={note.color} key={note.created_at + " " + note.created_at.toString()}>
            <Header>
                <div className="info">
                    <span>Created at: {note.created_at}</span>
                    <span>Last edit at: {note.last_edit}</span>
                </div>
                <div>
                    <button onClick={()=>exclude(id)}><BiTrash size={18}/></button>
                    <button onClick={handleEditMode}><BiPencil size={18}/></button>
                </div>
            </Header>
            <hr />
            <Body>
                {editMode? 
                    <div>
                        <textarea value={editedValue} onChange={(e)=>setEditedValue(e.target.value)}/>
                        <button onClick={handleSave}><BiSave size={18}/></button>
                    </div>
                :
                    <p>{note.content}</p>
                }
            </Body>
        </Container>
    )
    function handleEditMode(){
        setEditMode(true);
        setEditedValue(note.content)
    }
    function handleSave(){
        setEditMode(false)
        edit(id,editedValue)
        setEditedValue("");
    }
}
