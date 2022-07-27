import React from "react"
import boxes from "./Components/Boxes"
import Box from "./Components/Box"
import "./App.css"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    // const handleBox = () => {
    //   setSquares(prevState =>[...prevState, !prevState])
    // }


    const squareElements = squares.map(square => (
        <Box key={square.id} on={square.on} ids={square.id} /> 
    ))

    
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
