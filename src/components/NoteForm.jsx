import { useState } from "react"

function NoteForm({ onAddNote }) {
    const [text, setText] = useState("")
    const [tags, setTags] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!text.trim()) return 

        const newNote = {
            id: Date.now(),
            text,
            tags: tags.split(",").map(tag => tag.trim()).filter(Boolean)
        }

        onAddNote(newNote)

        setText("")
        setTags("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Текст заметки"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <input 
                type="text"
                placeholder="Теги (через запятую)"
                value={tags}
                onChange={(e) => setTags(e.target.value)} 
            />
            <button type="submit">Добавить</button>
        </form>
    )
}

export default NoteForm