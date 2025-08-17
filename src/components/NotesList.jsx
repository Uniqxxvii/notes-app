import Note from "./Note"

function NotesList({ notes }) {
    return (
        <div>
            NotesList
            {notes.map(note => (
                <Note key={note.id} text={note.text} tags={note.tags} />
            ))}
        </div>
    )
}

export default NotesList