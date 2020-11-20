import React from "react"


export default function Booklist(props){
    return(
    <div className="Booklist">
        
        <input type="text" className="searchbox" />
        <button className="searchControls">Search</button>
        <button className="searchControls">Clear Search</button>
    </div>
    )
}