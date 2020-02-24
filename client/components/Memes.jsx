import React, { Component } from "react"

class Memes extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }


  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Description display</h1>
        <p>{this.props.description}</p>
      </div>
    )
  }




}

export default Memes



