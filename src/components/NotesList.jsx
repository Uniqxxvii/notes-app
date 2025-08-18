import Note from "./Note"

function NotesList({ notes, onDelete }) {
    return (
        <div>
            NotesList
            {notes.map(note => (
                <Note 
                    key={note.id}
                    id={note.id} 
                    text={note.text} 
                    tags={note.tags}
                    onDelete={onDelete} 
                />
            ))}
        </div>
    )
}

export default NotesList