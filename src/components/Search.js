import React, { useState } from 'react'

import './Search.css'

const Search = ({ srch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    srch(searchTerm)
  }

  return (
    <div className="search-container">
        <form onSubmit={(event) => {handleSubmit(event)}} className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            name="q"
            value={searchTerm}
            onChange={handleChange}
          />
          <button className="btn btn-outline-success my-2 my-sm-0 search-btn" type='submit'>Search</button>
        </form>
    </div>
  )
}

export default Search
