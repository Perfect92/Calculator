
const initialState = {
  num1: 0,
  num2: 0,
  result: 0,
};


export function reducer (state = initialState, action) {
  switch (action.type) {
    case 'SET_NUM1':
      return { ...state, num1: action.payload }
    case 'SET_NUM2':
      return { ...state, num2: action.payload }
    case 'ADD':
      return { ...state, result: state.num1 + state.num2 }
    case 'SUBTRACT':
      return { ...state, result: state.num1 - state.num2 }
    case 'MULTIPLY':
      return { ...state, result: state.num1 * state.num2 }
    case 'DIVIDE':
      return { ...state, result: state.num1 / state.num2 }
    default:
      return state;
  }
}
