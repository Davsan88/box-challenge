import React from "react"
import boxes from "./boxes"
import "./App.css"

export default function App() {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */
    const [boxesArray, setBoxesArray] = React.useState(boxes)

    const boxElements = boxesArray.map((box) => (
        <div key={box.id} className="box"></div>
    ))


    return (
        <main>
            {boxElements}
        </main>
    )
}
