import { useState, useEffect } from "react"

function NoteForm({ onAddNote, onUpdateNote, editingNote }) {
    const [text, setText] = useState("")
    const [tags, setTags] = useState("")

    useEffect(() => {
        if (editingNote) {
            setText(editingNote.text)
            setTags(editingNote.tags.join(", "))
        }
    }, [editingNote])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!text.trim()) return 

        const noteData = {
            id: editingNote ? editingNote.id : Date.now(),
            text,
            tags: tags.split(",").map(tag => tag.trim()).filter(Boolean)
        }

        if (editingNote) { 
            onUpdateNote(noteData)
        } else {
            onAddNote(noteData)
        }

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
            <button type="submit">
                {editingNote ? "Сохранить" : "Добавить"}
            </button>
        </form>
    )
}

export default NoteForm