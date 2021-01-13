import './App.scss';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="container-fluid App">
      <div className="row justify-content-center ">
        <h1> My List </h1>
      </div>
      <div className="row">
        <div className="container-fluid justify-content-center">
          <TodoItem title="This is a Title" message="Hello!"></TodoItem>
          <TodoItem title="This is Also a Title" message="How Are You?"></TodoItem>
        </div>
      </div>
    </div>
  );
}

export default App;
