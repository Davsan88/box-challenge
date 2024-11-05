import React from "react"
import boxes from "./boxes"
import Box from "./components/Box"
import "./App.css"

export default function App({ darkMode }) {
    const [boxesArray, setBoxesArray] = React.useState(boxes)

    const toggle = (id) => {
        setBoxesArray(prevBoxes => {
            return prevBoxes.map(box => {
                return box.id === id ? {...box, on: !box.on} : {...box}
            })
        })
    }

    const boxElements = boxesArray.map((box) => (
        <Box 
            key={box.id} 
            on={box.on} 
            toggle={() => toggle(box.id)}
        />
    ))


    return (
        <main>
            {boxElements}
        </main>
    )
}
