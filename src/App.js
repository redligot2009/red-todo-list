import './App.scss';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="App container">
      <h1> My List </h1>
      <div className="row justify-content-center">
      <TodoItem title="This is a Title" message="Hello!"></TodoItem>
      <TodoItem title="This is Also a Title" message="How Are You?"></TodoItem>
      </div>
    </div>
  );
}

export default App;
