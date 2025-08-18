import "./Header.css"

function Header({ searchQuery, setSearchQuery, notes, setSelectedTag, selectedTag }) {
    const allTags = [...new Set(notes.flatMap(note => note.tags))]

    return (
        <div className="header">
            <input 
                type="text"
                className="search"
                placeholder="Поиск"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <div className="tags">
                <button 
                    className={selectedTag === null ? "active" : ""} 
                    onClick={() => setSelectedTag(null)}
                >
                    Все
                </button>
                
                {allTags.map(tag => (
                    <button
                        className={selectedTag === tag ? "active" : ""}  
                        key={tag} 
                        onClick={() => setSelectedTag(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Header