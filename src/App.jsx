import React from "react"
import boxes from "./boxes"
import Box from "./components/Box"
import "./App.css"

export default function App({ darkMode }) {
    const [boxesArray, setBoxesArray] = React.useState(boxes)

    const toggle = () => {
        console.log("Clicked")
    }

    const boxElements = boxesArray.map((box) => (
        <Box 
            key={box.id} 
            on={box.on} 
            toggle={toggle}
        />
    ))


    return (
        <main>
            {boxElements}
        </main>
    )
}
