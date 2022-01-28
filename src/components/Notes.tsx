import { Body, Card, Container, Header } from "@/styles/components/Notes";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';


interface INotes{
    content: string;
    created_at: Date;
}

export default function Notes({initialData}){
    const [notes,setNotes] = useState<INotes[]>(initialData ? JSON.parse(initialData).notesData : []);
    const [editing,setEditing] = useState(-1);
    const [contentEditing, setContentEditing] = useState("");
    useEffect(()=>{
        Cookies.set('notesData',JSON.stringify({notesData:notes}))
    },[notes])
    return (
        <Container>
            <Header>
                <button onClick={createNote}>+</button>
            </Header>
            <Body>
                {notes.map((note,index)=>{
                    return(
                        <Card key={note.created_at.toString() + index}>
                            {editing === index?
                                <div>
                                    <textarea 
                                        name="content" 
                                        value={contentEditing} 
                                        rows={4}
                                        cols={30}
                                        onChange={(e)=>setContentEditing(e.target.value)}/>
                                    <button onClick={salvar}>Salvar</button>
                                </div>
                                :
                                <div>
                                    <div className="button-container">
                                        <button onClick={()=>edit(index)}>Editar</button>
                                        <button onClick={()=>deleteNote(index)}>X</button>
                                    </div>
                                    <p>{note.content}</p>
                                </div>
                            }
                        </Card>
                    )
                })}
            </Body>
        </Container>
    )

    function createNote(){
        let newNote = {
            content: "",
            created_at: new Date()
        }
        setNotes([...notes, newNote]);
        console.log(notes.length)
        edit(notes.length,newNote)
    }
    function salvar(){
        let state = notes;
        state[editing].content = contentEditing;
        setContentEditing("");
        setNotes(state);
        setEditing(-1);
    }
    function deleteNote(index){
        let state = notes;
        state = state.filter((a,b)=> b !== index )
        setNotes(state)
    }
    function edit(index,note = {}){
        setEditing(index)
        console.log(index)
        console.log(note)
        console.log(notes[index])
        if(note === {}){
            setContentEditing(notes[index].content)
        }
        else{
            setContentEditing("")
        }
    }
}