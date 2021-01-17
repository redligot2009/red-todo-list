import { Modal, Button, Form } from "react-bootstrap";
import React, { Component } from "react";
import ModalDialogBox from '../ModalDialogBox';

export default class AddItem extends ModalDialogBox
{
    constructor(props)
    {
        super(props, "add-item");
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
                        />
                    </Form.Group>
                </Form>
            </>
        );
    }
}