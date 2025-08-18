import Header from "./components/Header"
import NotesList from "./components/NotesList"
import Note from "./components/Note"
import NoteForm from "./components/NoteForm"
import { useState } from "react"

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes")
    return saved ? JSON.parse(saved) : []
  })
  const [editingNote, setEditingNote] = useState(null)

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  const addNote = (note) => {
    setNotes([note, ...notes])
  }

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  const updateNote = (updatedNote) => {
    setNotes(notes.map(note =>
      note.id === updatedNote.id ? updatedNote : note
    ))
    setEditingNote(null)
  }

  return (
    <div>
      <h1>Notes App</h1>
      <Header/>
      <NotesList 
        notes={notes} 
        onDelete={deleteNote}
        onEdit={setEditingNote} 
      />
      <NoteForm 
        onAddNote={addNote}
        onUpdateNote={updateNote}
        editingNote={editingNote}
      />
    </div>
  )
}

export default App