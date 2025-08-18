import Header from "./components/Header"
import NotesList from "./components/NotesList"
import Note from "./components/Note"
import NoteForm from "./components/NoteForm"
import { useState } from "react"

function App() {
  const [notes, setNotes] = useState([
    { id: 1, text: "Купить молоко", tags: ["покупки", "еда"] },
    { id: 2, text: "Прочитать книгу", tags: ["личное"] }
  ])
  const [editingNote, setEditingNote] = useState(null)

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