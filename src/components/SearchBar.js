import React, { useState } from 'react'

const SearchBar = (props) =>{

    const [term, setTerm] = useState('')
    
    let onFormSubmit = (e) => {
        console.log(term)
        e.preventDefault()
        props.onSubmit(term)
    }
    

        return (
            <div className='ui segment'>
                <form onSubmit={onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Image Search</label>
                        <input type='text' 
                               value={term} 
                               onChange={e => setTerm(e.target.value )} 
                        />
                    </div>
                </form>
            </div>
        )
}

export default SearchBar