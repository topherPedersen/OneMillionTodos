const initialState = {
  loading: true,
  item: [],
};
  
const todoReducer = (state, action) => {

// check for state undefined to prevent 
// redux from crashing app on load
if (typeof state === 'undefined') {
    return {...initialState};
}

switch (action.type) {
    case 'ADD_ONE_MILLION_TODOS':
    const newState = {...state};
    const oneMillionTodos = action.payload;
    newState.item = oneMillionTodos;
    newState.loading = false;
    return newState;
    default:
    return {...state};
}

  // If none of the conditions above are true,
  // simply return a copy of the current state
  return {...state};
};

export default todoReducer;