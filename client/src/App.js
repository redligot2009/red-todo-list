// STYLES
import './App.scss';

// LIBRARY IMPORTS
import {Button} from 'react-bootstrap';
import { Component } from 'react';

// REGULAR COMPONENTS
import TodoItem from './components/TodoItem';

//MODAL COMPONENTS
import EditListSettings from './components/modals/EditListSettings';
import AddItem from './components/modals/AddItem';

export default class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      openModal: false, 
      modalName: "",
      listItems: [],
      listSettings: {
        title: 'My List',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin eget tortor vel aliquam. Curabitur velit lectus, sodales in massa tempor, co'
      }
    };
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  componentDidMount()
  {
    fetch('/items')
      .then(res => {
        return res.json()
      })
      .then((listItems) => {
        this.setState({listItems});
      })
  }

//HANDLE MODAL EVENTS
  
  handleCloseModal()
  {
    this.setState(state => ({
      openModal:false,
      modalName:''
    }));
  }

  handleOpenModal (openModalName)
  {
    this.setState(state => ({
      openModal:true,
      modalName: openModalName
    }));
  }

  handleShowModal(modalName)
  {
    return (this.state.modalName===modalName ? this.state.openModal : 0);
  }

// RENDER LIST ITEMS

  renderListItems()
  {
    const item = (
      <>
        {this.state.listItems.map(
            listItem => (
              <TodoItem 
                key={listItem.id}
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
      <div className="container-fluid d-flex flex-column justify-content-center h-100 overflow-auto App">
        <EditListSettings 
          listSettings={this.state.listSettings}
          show={this.handleShowModal("edit-list-settings")} 
          onHide={this.handleCloseModal}
        />
        <AddItem
          show={this.handleShowModal("add-item")}
          onHide={this.handleCloseModal}
        />
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
            <Button 
              variant="outline-primary"
              onClick={()=>this.handleOpenModal("add-item")}
            >
              Add New Item
            </Button>
            <Button 
              variant="outline-primary"
              onClick={() => this.handleOpenModal("edit-list-settings")}
            >
              List Settings
            </Button>
        </div>
      </div>
    );
  }
}