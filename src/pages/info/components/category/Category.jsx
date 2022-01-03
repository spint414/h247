import React from 'react'
import './category.css'
// import {Link} from 'react-router-dom'

function Category(props) {
    return (
        <div className='info__categories-category'>
            <p>{props.title}</p>
        </div>
    )
}

export default Category
