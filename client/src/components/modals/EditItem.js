import { Modal, Button, Form } from "react-bootstrap";
import React, { Component } from "react";
import ModalDialogBox from '../ModalDialogBox';

export default class EditItem extends ModalDialogBox
{
    constructor(props)
    {
        super(props,"edit-item");
    }
    
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
                            defaultValue={this.props.itemTitle || ''}
                            placeholder="Enter item title here."
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
                            defaultValue={this.props.itemDescription || ''}
                            placeholder="Enter item description here."
                        />
                    </Form.Group>
                    
                </Form>
            </>
        )
    }
}