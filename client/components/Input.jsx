import React, {Component} from "react"
import {connect} from 'react-redux'
import { addLetter } from '../actions/actions'

class Input extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
  }



  handleChange(e) {
    // console.log(this.props)
    return this.props.dispatch(addLetter(e.target.value))
  }


  // handleChange(e) {
  //   this.setState({
  //     text: e.target.value
  //   })
  // }

  render() {
    console.log(this.props.newLetter)
    return (
      <div>
        <div>
          <input
            type='text'
            placeholder='enter text here'
            onChange={this.handleChange}
          />
        </div>
        <h1 className='popText'>{this.props.newLetter}</h1>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log(state)
  return {
    newLetter: state
  }
}



export default connect(mapStateToProps)(Input)