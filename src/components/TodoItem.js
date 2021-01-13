import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TodoItem.scss';

class TodoItem extends Component 
{
    render()
    {
        return (
            <div className="row todo-item">
                <input className="col-1 item-status" type="checkbox">
                </input> 
                <div className="col-7 item-information">
                    <div className="item-title">
                        {this.props.title || "Test Title Here"}
                    </div>
                    <div className="item-details">
                        {this.props.message || "Message here"}
                    </div>
                </div>
                <div className="col-4 item-operations">
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