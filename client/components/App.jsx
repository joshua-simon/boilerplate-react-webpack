import React, { Component } from "react"
import Header from './Header'
import MemeGen from './MemeGen'
import Comment from './Comment'
import { getMemes } from '../api'
import DescriptionDisp from './DescriptionDisp'

class App extends Component {
  constructor() {
    super()

    this.state = {
      memes: []
    }
  }


  componentDidMount() {
    getMemes()
      .then(memesData => {
        // console.log(memesData) console log is working
        this.setState({
          memes: memesData
        })
      })
  }

//is there a better place to put map?


  render() {
    return (
      <div>
        <div>
       <h1 className ='title'>Craft Memes</h1>
       <br />
       <br />
       {this.state.memes.map(memes =>{
         return <img className = 'photos' src = {memes.photo}/>
                
       })
      }
      </div>
      <div className = 'DisplayDiv'>
     <DescriptionDisp />
     </div>
      </div>
      
    )
  }

}
export default App

// function App() {
//   return (
//     <div>
//       <Header />
//       <br />
//       <br />
//       <MemeGen />
//       <br />
//       <br />
//       {/* <Comment/> */}
//     </div>
//   )
// }

// export default App