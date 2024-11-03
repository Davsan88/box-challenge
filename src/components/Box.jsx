import React, { useState } from 'react'


const Box = ({ on, toggle }) => {
    const styles = {
        backgroundColor: on ? "#222222" : "transparent"
    }

    return (
        <div onClick={toggle} style={styles} className="box">
            
        </div>
    )
}

export default Box
