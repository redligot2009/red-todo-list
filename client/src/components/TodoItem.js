import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {Component} from 'react';
import EditItem from './modals/EditItem';
import './TodoItem.scss';

export default class TodoItem extends Component 
{
    constructor(props)
    {
        super(props);
        this.state={
            openEditModal: false,
            itemTitle:this.props.itemTitle || '',
            itemDescription:this.props.itemDescription || '',
            checked:this.props.checked || false
        };
    }

    handleEdit(itemTitle,itemDescription)
    {
        this.setState({openEditModal:true,modalName:''})
    }

    render()
    {
        return (
            <>
                <EditItem 
                    show={this.state.openEditModal}
                    onHide={() =>
                        {
                            this.setState({openEditModal:false,modalName:'edit-item'});
                        }
                    }
                    itemTitle={this.state.itemTitle}
                    itemDescription={this.state.itemDescription}
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
                                <span className="text-hide">Invisible</span>
                            </label>
                        </div>
                    </div>
                    <div className="col-6 item-information">
                        <div className="row item-title">
                            {this.props.title || "Test Title Here"}
                        </div>
                        <div className="row item-details">
                            {this.props.description || "Message here"}
                        </div>
                    </div>
                    <div className="col-4 item-operations d-flex justify-content-end">
                        <button 
                            type="button" 
                            className="item-edit btn btn-outline-primary"
                            onClick={()=>{
                                this.setState({
                                    openEditModal:true,
                                    itemTitle: this.props.title,
                                    itemDescription: this.props.description
                                })
                            }}
                        >
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button type="button" className="item-delete btn btn-outline-primary">
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </div>
            </>
        );
    }
}