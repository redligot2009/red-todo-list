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

// SERVICES
import ItemDataService from './services/items.service';
import ListSettingsDataService from './services/listSettings.service';

export default class App extends Component
{

  // TEST FUNCTIONS
  listItemsContent = [
    {
      itemTitle: "This is a Title",
      itemDescription: "Hello!",
      checked: false
    },
    {
      itemTitle: "This is also a Title",
      itemDescription: "How Are You?",
      checked: false
    },
    {
      itemTitle: "This is not a Title",
      itemDescription: "How Well Are You?",
      checked: true
    }
  ];

  populateList()
  {
    this.listItemsContent.forEach(
      (item) =>
      {
        var data = {
          itemTitle: item.itemTitle,
          itemDescription: item.itemDescription,
          checked: item.checked
        };
        ItemDataService.create(data)
          .then (response=>{
            console.log(response.data);
          })
          .catch (e=>{
            console.log(e);
          });
      });
  }

  // CONSTRUCTOR + COMPONENT METHODS
  constructor(props)
  {
    super(props);
    this.state = {
      openModal: false, 
      modalName: "",
      listItems: [],
      listSettings: {}
    };
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.retrieveList = this.retrieveList.bind(this);
    this.retrieveListSettings = this.retrieveListSettings.bind(this);
    
    // Get all items in list from database through backend REST API.
    this.retrieveList();

    // Get list settings from database through backend REST API.
    this.retrieveListSettings();
  }

  // DATABASE EVENTS
  async retrieveList ()
  {
    console.log("Refreshed list items.");
    await ItemDataService.getAll()
      .then(response=>{
        this.setState({
          listItems: response.data
        });
      })
      .catch(e=>{
        console.log(e);
      });
  }

  async retrieveListSettings()
  {
    console.log("Retrieved list settings.");
    await ListSettingsDataService.get()
      .then(response=>{
        this.setState({
          listSettings: response.data
        });
      })
      .catch(e=>{
        console.log(e);
      });
  }

  // HANDLE MODAL EVENTS
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

  // HANDLE LIST ITEM EVENTS
  handleDeleteItem = (itemId) =>
  {
    console.log("Item with id " + itemId + " deleted!");
    // Delete item on the UI
    const items = this.state.listItems.filter(item => item.id !== itemId);
    this.setState({listItems: items});
    // Delete item from database
    ItemDataService.delete(itemId)
      .catch((e)=>
      {
        console.log(e);
      });
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
                id={listItem.id}
                itemTitle={listItem.itemTitle}
                itemDescription={listItem.itemDescription}
                checked={listItem.checked}
                onDelete={this.handleDeleteItem}
                onEdit={this.retrieveList}
              />
        ))}
      </>
    );
    return item;
  }

  // RENDER APP
  render()
  {
    return (
      <div className="container-fluid d-flex flex-column justify-content-center h-100 overflow-auto App">
        {
          this.state.listSettings.listTitle ? (<EditListSettings 
            listTitle={this.state.listSettings.listTitle}
            listDescription={this.state.listSettings.listDescription}
            show={this.handleShowModal("edit-list-settings")} 
            onHide={this.handleCloseModal}
            onEdit={this.retrieveListSettings}
            //onEdit={}
          />) : ''
        }
        <AddItem
          show={this.handleShowModal("add-item")}
          onHide={this.handleCloseModal}
          onAdd={this.retrieveList}
        />
        <div className="row d-flex flex-column align-items-center justify-content-center list-title">
          <div className="container-fluid" style={{maxWidth:750}}>
            <h1> {this.state.listSettings.listTitle} </h1>
            <p> {this.state.listSettings.listDescription} </p>
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