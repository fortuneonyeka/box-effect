import React from "react"
import boxes from "./Components/Boxes"
import Box from "./Components/Box"
import "./App.css"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)

    const squareElements = squares.map(square => (
        <Box key={square.id} completed={square.completed} ids={square.id} /> 
    ))

    
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
