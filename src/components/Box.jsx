import React, { useState } from 'react'


const Box = ({ on, toggle }) => {
    const [isOn, setIsOn] = useState(on)

    // const toggleColor = () => setIsOn(prevIsOn => !prevIsOn)

    const styles = {
        backgroundColor: isOn ? "#222222" : "transparent"
    }

    return (
        <div onClick={toggle} style={styles} className="box">
            
        </div>
    )
}

export default Box
