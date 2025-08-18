
function Note({ id, text, tags, onDelete }) {
    return (
        <div>
            <p>{text}</p>
            <small>{tags.join(", ")}</small>
            <button onClick={() => onDelete(id)}>Удалить</button>
        </div>
    )
}

export default Note