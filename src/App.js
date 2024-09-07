import { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState('');

  const addTodo = () => {
    if (toDo.trim()) {
      setTodos([...toDos, { id: Date.now(), text: toDo, status: 'active' }]);
      setTodo('');
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      toDos.map((todo) =>
        todo.id === id
          ? { ...todo, status: todo.status === 'active' ? 'completed' : 'active' }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(
      toDos.map((todo) =>
        todo.id === id ? { ...todo, status: 'deleted' } : todo
      )
    );
  };

  const activeTodos = toDos.filter((todo) => todo.status === 'active');
  const completedTodos = toDos.filter((todo) => todo.status === 'completed');
  const deletedTodos = toDos.filter((todo) => todo.status === 'deleted');

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕</h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i className="fas fa-plus" onClick={addTodo}></i>
      </div>

      <div className="todos">
        <h2>Active Tasks</h2>
        {activeTodos.map((todo) => (
          <div key={todo.id} className="todo">
            <div className="left">
              <input
                type="checkbox"
                checked={todo.status === 'completed'}
                onChange={() => toggleComplete(todo.id)}
              />
              <p>{todo.text}</p>
            </div>
            <div className="right">
              <i className="fas fa-times" onClick={() => deleteTodo(todo.id)}></i>
            </div>
          </div>
        ))}

        <h2>Completed Tasks</h2>
        {completedTodos.map((todo) => (
          <div key={todo.id} className="todo completed">
            <div className="left">
              <input
                type="checkbox"
                checked={todo.status === 'completed'}
                onChange={() => toggleComplete(todo.id)}
              />
              <p>{todo.text}</p>
            </div>
            <div className="right">
              <i className="fas fa-times" onClick={() => deleteTodo(todo.id)}></i>
            </div>
          </div>
        ))}

        <h2>Deleted Tasks</h2>
        {deletedTodos.map((todo) => (
          <div key={todo.id} className="todo deleted">
            <p>{todo.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

