
function Note({ text, tags }) {
    return (
        <div>
            <p>{text}</p>
            <small>{tags.join(", ")}</small>
        </div>
    )
}

export default Note