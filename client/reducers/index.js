

const letters = (state = '', action) => {

  // console.log(action)

  switch (action.type) {
    case 'ADD_LETTER':
      return action.letter
//how do you write an event function in a reducer?
    default:
      return state
  }
}

export default letters
