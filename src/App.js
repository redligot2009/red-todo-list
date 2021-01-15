import './App.scss';
import TodoItem from './components/TodoItem';
import EditItem from './components/EditItem';
import {Button} from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Component } from 'react';

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {openModal: false};
  }
  render()
  {
    return (
      <div className="container-fluid d-flex flex-column justify-content-center h-100 App">
        <EditItem 
          show={this.state.openModal} 
          onHide={ () => this.setState({openModal:false})
          }/>
        <div className="row justify-content-center list-title">
          <h1> My List </h1>
        </div>
        <div className="row list-contents h-75 overflow-auto">
          <div className="container-fluid justify-content-center" style={{maxWidth:750}}>
            <TodoItem title="This is a Title" listColor="#000000" message="Hello!"></TodoItem>
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
            <Button variant="outline-primary">
              Add New Item
            </Button>
            <Button variant="outline-primary"
              onClick={
                () => this.setState({openModal: true})
              }>
              List Settings
            </Button>
        </div>
      </div>
    );
  }
}

export default App;
