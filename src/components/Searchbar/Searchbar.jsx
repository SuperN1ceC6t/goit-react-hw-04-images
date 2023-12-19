export const Searchbar = ({handleChange, handleSubmit}) => {
    
    return (
        <header className="Searchbar">
            <form className="SearchForm" onSubmit={handleSubmit}>
            <button className="SearchForm-button"><span className="button-label">Search</span></button>
                <input 
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={handleChange}
                />
            </form>
        </header>
    )
}