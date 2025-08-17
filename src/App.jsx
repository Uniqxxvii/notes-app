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

  const addNote = (note) => {
    setNotes([note, ...notes])
  }

  return (
    <div>
      <h1>Notes App</h1>
      <Header/>
      <NotesList notes={notes} />
      <NoteForm onAddNote={addNote}/>
    </div>
  )
}

export default App