import React, {Component} from "react"
import logo from "./logo.svg"
import './App.css';
import Header from './Components/Header'
import Booklist from './Components/Booklist'
import Shelf from "./Components/Shelf";
import data from "./Components/data"


class App extends Component{
  constructor(){
    super()
    this.state = {}

    }
render(){
    return(
      <section>
        <Header />
      <div className="App">
        <Booklist books={data} />
        <Shelf />
      </div>
      </section>
    )
  }
}
export default App;
        
           





