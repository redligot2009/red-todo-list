import { Modal, Button, Form } from "react-bootstrap";
import React, { Component } from "react";
import ModalDialogBox from '../ModalDialogBox';

// Import services
import ItemDataService from '../../services/items.service';

export default class AddItem extends ModalDialogBox
{
    constructor(props)
    {
        super(props, "add-item");
        this.state={
            itemTitle:'',
            itemDescription:''
        };
    }

    closeModal ()
    {
        this.setState({
            itemTitle:'',
            itemDescription:''
        });
        super.closeModal();
    }
    
    async saveChanges()
    {
        if(this.state.itemTitle.length === 0 || this.state.itemDescription.length === 0)
        {
            console.log("Item fields must not be empty!");
            return false;
        }
        super.saveChanges();
        await ItemDataService.create(this.state)
            .then(res=>{
                console.log("Item added successfully! " + res.data);
            })
            .catch(e=>{
                console.log(e);
            });
        this.props.onAdd();
        return true;
    }

    renderHeader()
    {
        return (
            <>
                <Modal.Title>
                    Add List Item
                </Modal.Title>
            </>
        );
    }

    renderBody()
    {
        return (
            <>
                <Form id="add-item-form">
                    <Form.Group >
                        <Form.Label>
                            Item Title
                        </Form.Label>
                        <Form.Control
                            id="item-title"
                            as="input"
                            maxLength="50"
                            placeholder="Enter item title here."
                            value={this.state.itemTitle}
                            onChange={e=>this.setState({itemTitle : e.target.value})}
                        />
                    </Form.Group>
                    
                    <Form.Group >
                        <Form.Label>
                            Item Description
                        </Form.Label>
                        <Form.Control
                            id="item-description"
                            as="textarea"
                            rows="3"
                            maxLength="150"
                            placeholder="Enter item description here."
                            value={this.state.itemDescription}
                            onChange={e=>this.setState({itemDescription : e.target.value})}
                        />
                    </Form.Group>
                </Form>
            </>
        );
    }
}