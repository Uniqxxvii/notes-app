import Note from "../Note/Note"
import "./notes-list.css"

function NotesList({ notes, onDelete, onEdit }) {
    return (
        <div className="notes-list">
            {notes.length === 0 ? (
                <p className="empty-message">Нет заметок</p>
            ) : (
                notes.map(note => (
                    <Note 
                        key={note.id}
                        id={note.id} 
                        text={note.text} 
                        tags={note.tags}
                        onDelete={onDelete} 
                        onEdit={() => onEdit(note)}
                    />
                ))
            )}
        </div>
    )
}

export default NotesList