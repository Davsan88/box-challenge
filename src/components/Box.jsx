import React from 'react'


const Box = ({ on }) => {
    const styles = {
        backgroundColor: on ? "#222222" : "none"
    }

  return (
    <div style={styles} className="box">
      
    </div>
  )
}

export default Box
