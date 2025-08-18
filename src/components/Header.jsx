
function Header({ searchQuery, setSearchQuery, notes, setSelectedTag }) {
    const allTags = [...new Set(notes.flatMap(note => note.tags))]

    return (
        <div>
            <input 
                type="text"
                placeholder="Поиск"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <div>
                <button onClick={() => setSelectedTag(null)}>Все</button>
                {allTags.map(tag => (
                    <button key={tag} onClick={() => setSelectedTag(tag)}>
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Header