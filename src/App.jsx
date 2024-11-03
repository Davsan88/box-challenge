import React from "react"
import boxes from "./boxes"
import Box from "./components/Box"
import "./App.css"

export default function App({ darkMode }) {
    const [boxesArray, setBoxesArray] = React.useState(boxes)

    const toggle = (id) => {
        setBoxesArray(prevBoxes => prevBoxes.map(box => {
            if (box.id === id) {
                return {
                    ...box,
                    on: !box.on
                }
            } else {
                return box
            }
        }))
        console.log("Clicked")
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
