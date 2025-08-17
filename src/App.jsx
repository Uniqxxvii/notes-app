import Header from "./components/Header"
import NotesList from "./components/NotesList"
import Note from "./components/Note"
import NoteForm from "./components/NoteForm"


function App() {
  const notes = [
    { id: 1, text: "Купить молоко", tags: ["покупки", "еда"] },
    { id: 2, text: "Прочитать книгу", tags: ["личное"] }
  ]

  return (
    <div>
      <h1>Notes App</h1>
      <Header/>
      <NotesList notes={notes} />
      <NoteForm/>
    </div>
  )
}

export default App