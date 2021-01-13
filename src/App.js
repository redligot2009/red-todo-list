import './App.scss';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center h-100 App">
      <div className="row justify-content-center list-title">
        <h1> My List </h1>
      </div>
      <div className="row list-contents h-75 overflow-auto">
        <div className="container-fluid justify-content-center" style={{maxWidth:750}}>
          <TodoItem title="This is a Title" message="Hello!"></TodoItem>
          <TodoItem title="This is Also a Title" message="How Are You?"></TodoItem>
          <TodoItem title="This is Also a Title" message="How Are You?"></TodoItem>
          <TodoItem title="This is Also a Title" message="How Are You?"></TodoItem>
          <TodoItem title="This is Also a Title" message="How Are You?"></TodoItem>
          <TodoItem title="This is Also a Title" message="How Are You?"></TodoItem>
          <TodoItem title="This is Also a Title" message="How Are You?"></TodoItem>
          <TodoItem title="This is Also a Title" message="How Are You?"></TodoItem>
          <TodoItem title="This is Also a Title" message="How Are You?"></TodoItem>
          <TodoItem title="This is Also a Title" message="How Are You?"></TodoItem>
        </div>
      </div>
      <div className="row justify-content-center list-operations">
          <button type="button" className="btn btn-outline-primary">Add New Item</button>
      </div>
    </div>
  );
}

export default App;
