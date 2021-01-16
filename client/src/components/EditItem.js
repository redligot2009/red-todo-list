import { Modal, Button, Form } from "react-bootstrap";
import React, { Component } from "react";
import ModalDialogBox from './ModalDialogBox';

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
                    <Form.Group controlId="listTitle">
                        <Form.Label>
                            List Title
                        </Form.Label>
                        <Form.Control
                            id="item-title"
                            as="input"
                            maxlength="50"
                            defaultValue={this.props.itemTitle || ''}
                        />
                    </Form.Group>
                    
                    <Form.Group controlId="listDescription">
                        <Form.Label>
                            List Description
                        </Form.Label>
                        <Form.Control
                            id="item-description"
                            as="textarea"
                            rows="3"
                            maxlength="150"
                            defaultValue={this.props.itemDescription || ''}
                        />
                    </Form.Group>
                    
                </Form>
            </>
        )
    }
}