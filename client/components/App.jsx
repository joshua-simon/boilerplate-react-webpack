import React, { Component } from "react"
import { getMemes } from '../api'
import Memes from './Memes'
import Input from './Input'

class App extends Component {
  constructor() {
    super()

    this.state = {
      memes: [],
      description: false,
      currentMeme: {}
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }



  componentDidMount() {
    getMemes()
      .then(memesData => {
        // console.log(memesData) console log is working
        this.setState({
          memes: memesData,

        })
      })
  }

  handleClick(meme) {
    this.setState(prevState => {
      return {
        description: !prevState.description,
        currentMeme: meme
      }
    })
  }

  handleChange(e) {
    this.setState({
        text: e.target.value
    })
}

  render() {
    return (

      <div>
        <div>
          <h1 className='title'>Craft Memes</h1>
        <div onChange = {this.handleChange}>
          <Input />
        </div>
          <br />
          <br />
          {this.state.memes.map(meme => {
            return (
              <div>
                <img className='photos' src={meme.photo} onClick={() => this.handleClick(meme)} />

              </div>
            )
          })
          }
        </div>
        <div className='DisplayDiv' >
          {this.state.description ? <Memes description={this.state.currentMeme.description} /> : null}
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