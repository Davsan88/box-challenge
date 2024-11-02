import React from "react"
import boxes from "./boxes"
import Box from "./components/Box"
import "./App.css"

export default function App({ darkMode }) {
    const [boxesArray, setBoxesArray] = React.useState(boxes)

    const boxElements = boxesArray.map((box) => (
        <Box 
            key={box.id} 
            on={box.on} 
        />
    ))


    return (
        <main>
            {boxElements}
        </main>
    )
}
