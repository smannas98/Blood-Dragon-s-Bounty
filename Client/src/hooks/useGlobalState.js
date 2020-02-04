import { createContext, useReducer } from 'react';

/*Action types */
const SET_DATA = 'SET_DATA';

const GlobalStateContext = createContext();

const initialState = { eats: {} };

const globalStateReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload
      };
    case "ADD_DATA":
      return {
        ...state,
        data: state.eats.concat(action.payload)
      };
    case "REMOVE_DATA":
      return {
        ...state,
        data: state.eats.filter(post => post.id !== action.payload)
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default GlobalStateProvider = ({children}) => {
    const [state, dispatch] = useReducer(globalStateReducer, initialState);
    return (
        <GlobalStateContext.Provider value={[state, dispatch]}>
            {children}
        </GlobalStateContext.Provider>
    )
};
