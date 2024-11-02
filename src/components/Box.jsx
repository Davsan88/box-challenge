import React, { useState } from 'react'


const Box = ({ on }) => {
    const [color, setColor] = useState(on)

    const toggleColor = () => setColor(prevColor => !prevColor)

    const styles = {
        backgroundColor: color ? "#222222" : "transparent"
    }

    return (
        <div onClick={toggleColor} style={styles} className="box">
            
        </div>
    )
}

export default Box
