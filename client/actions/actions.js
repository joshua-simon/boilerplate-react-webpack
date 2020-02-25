export const addLetter = (inputValue) => {
  console.log("IAMWORKING")
  return {
    type: 'ADD_LETTER',
    letter: inputValue
  }
}


// action dispatches every time input field receives keystroke

