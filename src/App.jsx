import React from "react"
import boxes from "./boxes"
import "./App.css"

export default function App({ darkMode }) {
    const [boxesArray, setBoxesArray] = React.useState(boxes)

     // Challenge: use a ternary to determine the backgroundColor.
    // If darkMode is true, set it to "#222222"
    // If darkMode is false, set it to "#cccccc"

    const styles = {
        backgroundColor: darkMode ? "#222222" : "#cccccc"
    }

    const boxElements = boxesArray.map((box) => (
        <div style={styles} key={box.id} className="box"></div>
    ))


    return (
        <main>
            {boxElements}
        </main>
    )
}
