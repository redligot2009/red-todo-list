import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TodoItem.scss';

class TodoItem extends Component 
{
    render()
    {
        return (
            <div className="row todo-item d-flex justify-content-center">
                <div className="col-2 item-status">
                    <input className="item-status-checkbox" type="checkbox">
                    </input> 
                </div>
                <div className="col-6 item-information">
                    <div className="row item-title">
                        {this.props.title || "Test Title Here"}
                    </div>
                    <div className="row item-details">
                        {this.props.message || "Message here"}
                    </div>
                </div>
                <div className="col-4 item-operations d-flex justify-content-center">
                    <button type="button" className="item-edit btn btn-outline-primary">
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button type="button" className="item-delete btn btn-outline-primary">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                    
                </div>
            </div>
        );
    }
}

export default TodoItem;