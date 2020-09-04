import React, { useState } from 'react'
import SearchBar from './SearchBar'
import unsplash from '../api/unsplash'
import Imagelist from './ImageList'

const App = () => {

    const [images, setImages] = useState([])

    let onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        })
        setImages(response.data.results)
    }


    return (
        <div className='ui container' style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={onSearchSubmit} />
            <Imagelist  images={ images } />
        </div>
    )
}

export default App
