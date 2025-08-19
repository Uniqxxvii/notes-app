import "./note.css"

function Note({ id, text, tags, onDelete, onEdit }) {
    return (
        <div className="note">
            <p className="note-text">{text}</p>
            <small>{tags.join(", ")}</small>
            <div className="note-actions">
                <button onClick={() => onEdit()}>Редактировать</button>
                <button onClick={() => onDelete(id)}>Удалить</button>
            </div>
        </div>
    )
}

export default Note