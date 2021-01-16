import './App.scss';
import TodoItem from './components/TodoItem';
import EditListSettings from './components/EditListSettings';
import {Button} from 'react-bootstrap';
import { Component } from 'react';

export default class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      openModal: false, 
      modalName: "",
      listItems: [
        {
          id: 1,
          title: 'This is a Title',
          description: "Hello!"
        },
        {
          id: 2,
          title: 'This is also a Title',
          description: "How Are You?"
        },
        {
          id: 3,
          title: 'This is not a Title',
          description: "How Well Are You?"
        }
      ],
      listSettings: {
        title: 'My List',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin eget tortor vel aliquam. Curabitur velit lectus, sodales in massa tempor, co'
      },
      users: []
    };
  }

  componentDidMount()
  {
  }

  renderListItems()
  {
    const item = (
      <>
        {this.state.listItems.map(
            listItem => (
              <TodoItem 
                title={listItem.title}
                description={listItem.description}
              />
        ))}
      </>
    );
    return item;
  }

  render()
  {
    return (
      <div className="container-fluid d-flex flex-column justify-content-center h-100 App">
        <EditListSettings 
          listSettings={this.state.listSettings}
          show={this.state.openModal} 
          onHide={ 
            () => this.setState({openModal:false})
          }/>
        <div className="row d-flex flex-column align-items-center justify-content-center list-title">
          <div className="container-fluid" style={{maxWidth:750}}>
            <h1> {this.state.listSettings.title} </h1>
            <p> {this.state.listSettings.description} </p>
          </div>
        </div>
        <div className="row list-contents h-50">
          <div className="container-fluid justify-content-center h-100 overflow-auto" style={{maxWidth:750}}>
            { this.renderListItems() }
          </div>
        </div>
        <div className="row justify-content-center list-operations">
            <Button variant="outline-primary">
              Add New Item
            </Button>
            <Button variant="outline-primary"
              onClick={
                () => this.setState({openModal: true, modalName: "edit-list-settings"})
              }>
              List Settings
            </Button>
        </div>
      </div>
    );
  }
}