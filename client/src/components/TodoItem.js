import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {Component} from 'react';

// Import React components
import EditItem from './modals/EditItem';
import './TodoItem.scss';

// Import Axios services

import ItemDataService from '../services/items.service';

export default class TodoItem extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            id: this.props.id || 0,
            openEditModal: false,
            itemTitle: this.props.itemTitle || '',
            itemDescription: this.props.itemDescription || '',
            checked: this.props.checked || false
        };
    }

    // Event Handlers
    handleEdit(itemTitle,itemDescription)
    {
        this.setState({openEditModal:true, modalName:''})
    }

    handleDelete()
    {
        //alert("Deleting an item");
    }

    // Render Component
    render()
    {
        return (
            <>
                <EditItem 
                    show={this.state.openEditModal}
                    id={this.state.id}
                    itemTitle={this.state.itemTitle}
                    itemDescription={this.state.itemDescription}
                    onHide={() => {
                        this.setState({
                            openEditModal:false,
                            modalName:'edit-item'
                        });
                    }}
                    onEdit={this.props.onEdit}
                />
                <div className="row todo-item">
                    <div className="col-2 d-flex justify-content-center item-status">
                        <div className="custom-control custom-checkbox">
                            <input 
                                className="item-status-checkbox custom-control-input" 
                                type="checkbox" 
                                defaultChecked={this.state.checked} 
                            />
                            <label className="custom-control-label">
                                <span className="text-hide"> Invisible </span>
                            </label>
                        </div>
                    </div>
                    <div className="col-6 item-information">
                        <div className="row item-title">
                            {this.props.itemTitle || "Test Title Here"}
                        </div>
                        <div className="row item-details">
                            {this.props.itemDescription || "Message here"}
                        </div>
                    </div>
                    <div className="col-4 item-operations d-flex justify-content-end">
                        <button 
                            type="button" 
                            className="item-edit btn btn-outline-primary"
                            onClick={() => {
                                this.setState({
                                    openEditModal:true,
                                    itemTitle: this.props.itemTitle,
                                    itemDescription: this.props.itemDescription
                                })
                            }}
                        >
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button 
                            type="button" 
                            className="item-delete btn btn-outline-primary"
                            onClick={()=>this.props.onDelete(this.props.id)}
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </div>
            </>
        );
    }
}