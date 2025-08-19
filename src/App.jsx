import Header from "./components/Header/Header"
import NotesList from "./components/NotesList/NotesList"
import NoteForm from "./components/NoteForm/NoteForm"
import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes")
    return saved ? JSON.parse(saved) : []
  })
  const [editingNote, setEditingNote] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState(null)

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

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.text.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTag = selectedTag ? note.tags.includes(selectedTag) : true
    return matchesSearch && matchesTag
  })

  return (
    <div className="app">
      <h1 className="app-title">Notes App</h1>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        notes={notes}
        setSelectedTag={setSelectedTag}
        selectedTag={selectedTag}
      />
      <NotesList 
        notes={filteredNotes} 
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