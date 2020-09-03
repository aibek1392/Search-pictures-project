import React from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'


const App = () => {


    let onSearchSubmit = (term) => {
        console.log(term)
        axios.get('https://api.unsplash.com/search/photos', {
           params: { query: term },
           headers: {
               Authorization: `Client-ID ${process.env.REACT_APP_SPLASH_API_KEY}`
           }
        }).then((response) => console.log(response))
    }


    return (
        <div className='ui container' style={{marginTop: '10px'}}>
            <SearchBar onSubmit={onSearchSubmit}/>
        </div>
    )
}

export default App
