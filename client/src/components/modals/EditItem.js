import { Modal, Button, Form } from "react-bootstrap";
import React, { Component } from "react";
import ModalDialogBox from '../ModalDialogBox';

// Import services
import ItemDataService from '../../services/items.service';

export default class EditItem extends ModalDialogBox
{
    constructor(props)
    {
        super(props,"edit-item");
        this.state = {
            id: props.id,
            itemTitle: props.itemTitle,
            itemDescription: props.itemDescription
        };
    }

    closeModal ()
    {
        this.setState({
            id: this.props.id,
            itemTitle: this.props.itemTitle,
            itemDescription: this.props.itemDescription
        });
        super.closeModal();
    }
    
    async saveChanges ()
    {
        super.saveChanges();
        let data ={
            itemTitle: this.state.itemTitle,
            itemDescription: this.state.itemDescription
        };
        // Update item fields
        await ItemDataService.update(this.state.id, data)
            .then(res=>{
                console.log("Item updated successfully! " + res.data);
            })
            .catch(e=>{
                console.log(e);
            });
        this.props.onEdit();
    }

    // RENDER COMPONENT
    renderHeader()
    {
        return (
            <>
                <Modal.Title>
                    Edit Item
                </Modal.Title>
            </>
        );
    }

    renderBody()
    {
        return (
            <>
                <Form>
                    <Form.Group id="listTitle">
                        <Form.Label>
                            Item Title
                        </Form.Label>
                        <Form.Control
                            id="item-title"
                            as="input"
                            maxLength="50"
                            value={this.state.itemTitle}
                            placeholder="Enter item title here."
                            onChange={e => this.setState({ itemTitle: e.target.value })}
                        />
                    </Form.Group>
                    
                    <Form.Group id="listDescription">
                        <Form.Label>
                            Item Description
                        </Form.Label>
                        <Form.Control
                            id="item-description"
                            as="textarea"
                            rows="3"
                            maxLength="150"
                            value={this.state.itemDescription}
                            placeholder="Enter item description here."
                            onChange={e => this.setState({ itemDescription: e.target.value })}
                        />
                    </Form.Group>
                    
                </Form>
            </>
        )
    }
}