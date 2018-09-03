import { combineReducers } from 'redux';
import todoReducer from './todo_reducer';

const rootReducer = combineReducers({
	todo: todoReducer,
});

// Long way
// const rootReducer = function(state, action) {
//   return {todos: todosReducers(state.todos, action)};
// };

export default rootReducer;
