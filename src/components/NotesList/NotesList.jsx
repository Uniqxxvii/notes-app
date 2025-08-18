import Note from "../Note/Note"

function NotesList({ notes, onDelete, onEdit }) {
    return (
        <div>
            {notes.map(note => (
                <Note 
                    key={note.id}
                    id={note.id} 
                    text={note.text} 
                    tags={note.tags}
                    onDelete={onDelete} 
                    onEdit={() => onEdit(note)}
                />
            ))}
        </div>
    )
}

export default NotesList