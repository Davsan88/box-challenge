import React from 'react'


const Box = ({ on, toggle }) => {
    const styles = {
        backgroundColor: on ? "#222222" : "transparent"
    }

    return (
        <button 
            onClick={toggle} 
            style={styles} 
            className="box"
        >
        </button>
    )
}

export default Box
