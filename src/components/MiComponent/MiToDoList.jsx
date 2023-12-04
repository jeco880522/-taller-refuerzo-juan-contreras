// MiToDoList.js
import React, { useState } from 'react';
import { useTodo } from '../MiComponent/TodoContext';
import './style.css';

const MiToDoList = () => {
  const { todos, dispatch } = useTodo();
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), text: newTodo } });
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', payload: { id } });
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: { id } });
  };

  return (
    <div className="todo-container">
      <h2 className="title">Mi ToDo List</h2>
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Nueva tarea"
          className="input"
        />
        <button onClick={handleAddTodo} className="add-button">
          Agregar
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span className="todo-text" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => handleToggleTodo(todo.id)} className="toggle-button">
              {todo.completed ? 'Pendiente' : 'Completada'}
            </button>
            <button onClick={() => handleRemoveTodo(todo.id)} className="remove-button">
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MiToDoList;
