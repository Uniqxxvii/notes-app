
function Note({ id, text, tags, onDelete, onEdit }) {
    return (
        <div>
            <p>{text}</p>
            <small>{tags.join(", ")}</small>
            <button onClick={() => onEdit()}>Редактировать</button>
            <button onClick={() => onDelete(id)}>Удалить</button>
        </div>
    )
}

export default Note