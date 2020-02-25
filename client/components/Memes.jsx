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
      <div className = 'title'>

        <h2>{this.props.description}</h2>
      </div>
    )
  }




}

export default Memes



