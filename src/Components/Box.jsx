import React,{useState} from "react"

const Box = ({completed,ids}) => {

const [completeState,setCompleteState] = useState(completed)

const toggleCompleteState = () => {
  setCompleteState(prevSetOn => !prevSetOn)
}
    
    const styles = {
        backgroundColor: completeState ? "#228c22" : "#b103fc",
        color:"white",
        borderRadius : 10,
        paddingTop:110,
        textAlign:"center",
        margin: 10,
       
    }

  
    return (
        <div style={styles} className="box" onClick={toggleCompleteState}>{ids}</div>
    )
}

export default Box