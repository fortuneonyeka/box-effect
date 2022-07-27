import React,{useState} from "react"

const Box = ({on,ids}) => {

const [onState,setOnState] = useState(on)

const toggleonState = () => {
  setOnState(prevSetOn => !prevSetOn)
}
    
    const styles = {
        backgroundColor: onState ? "#222222" : "#b103fc",
        color:"white",
        borderRadius : 10,
        paddingTop:110,
        textAlign:"center",
        margin: 10,
       
    }
    return (
        <div style={styles} className="box" onClick={toggleonState}>{ids}</div>
    )
}

export default Box