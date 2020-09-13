import PropTypes from 'prop-types'
import React from 'react'
const Navbar = ({ title, icon }) => {
    return (
        <div className='navbar bg-primary'>
            <h1>
                <i className={icon}></i>
            </h1>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt'
}