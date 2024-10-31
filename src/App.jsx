import React from "react"
import boxes from "./boxes"
import Box from "./components/Box"
import "./App.css"

export default function App({ darkMode }) {
    const [boxesArray, setBoxesArray] = React.useState(boxes)


    // const styles = {
    //     backgroundColor: darkMode ? "#222222" : "#cccccc"
    // }

    const boxElements = boxesArray.map((box) => (
        // <div style={styles} key={box.id} className="box"></div>
        <Box on={box.on} key={box.id} className="box"/>
    ))


    return (
        <main>
            {boxElements}
        </main>
    )
}
