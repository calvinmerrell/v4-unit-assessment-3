import React, {Component} from "react"
import Booklist from "./Booklist"


class SearchBar extends Component{
    constructor(){
        super()
        this.state ={
            filterString: "",
            Data: []
        }
    }

    handleChange(filter) {
        this.setState({ filterString: filter });
      }

render (){
    let foodsToDisplay = this.state.Data
      .filter((element, index) => {
        return element.includes(this.state.filterString);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      })
    return(<div className="searchBar">
        <Booklist /> 
        </div>)
      
}
}
export default SearchBar