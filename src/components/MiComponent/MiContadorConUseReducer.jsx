import React, { useReducer } from 'react';


const contadorReducer = (state, action) => {
  switch (action.type) {
    case 'AUMENTAR':
      return { count: state.count + 1 };
    case 'DISMINUIR':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const MiContadorConUseReducer = () => {

  const initialState = { count: 0 };

  const [state, dispatch] = useReducer(contadorReducer, initialState);

  return (
    <div className='container'>
      <div className='counter'>
        <h2>Mi Contador con useReducer</h2>
        <p>Contador: {state.count}</p>
        <button onClick={() => dispatch({ type: 'AUMENTAR' })}>Aumentar</button>
        <button onClick={() => dispatch({ type: 'DISMINUIR' })}>Disminuir</button>
      </div>
    </div>
  );
};

export default MiContadorConUseReducer;
