import React from 'react'
import header from '../../../../assets/images/Contact-Header.png'

function Header() {
    return (
        <div className='contact__header' style={{display: "flex"}}>
            <img src={header} alt="header" style={{width: "100%"}}/>
        </div>
    )
}

export default Header
