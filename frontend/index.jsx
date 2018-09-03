import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './todo_redux';
import configureStore from './store/store';
import { receiveTodo, receiveTodos } from './actions/todo_actions';

window.store = configureStore();
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Todo />, root);
});
