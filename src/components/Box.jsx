import React from 'react'


const Box = ({ on }) => {
    const styles = {
        backgroundColor: on ? "#222222" : "transparent"
    }

    return (
        <div style={styles} className="box">

        </div>
    )
}

export default Box
