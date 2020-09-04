import React from 'react'
import './ImageList.css'

const ImageList = ({ images }) => {
    const pictures = images.map(({description, id, urls}) => {
        return <img alt={description} key={id} src={urls.regular} />
    })
    return <div className='image-list'>{pictures}</div>
}

export default ImageList