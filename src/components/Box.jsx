import React, { useState } from 'react'


const Box = ({ on }) => {
    const [isOn, setIsOn] = useState(on)

    const toggleColor = () => setIsOn(prevIsOn => !prevIsOn)

    const styles = {
        backgroundColor: color ? "#222222" : "transparent"
    }

    return (
        <div onClick={toggleColor} style={styles} className="box">
            
        </div>
    )
}

export default Box
