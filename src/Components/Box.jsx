import React from "react"

const Box = ({on,ids}) => {


    
    const styles = {
        backgroundColor: on ? "#222222" : "#b103fc",
        color:"white",
        borderRadius : 10,
        paddingTop:110,
        textAlign:"center",
        margin: 10,
       
    }
    return (
        <div style={styles} className="box" >{ids}</div>
    )
}

export default Box