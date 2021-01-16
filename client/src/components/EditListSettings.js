
import { Modal, Button, Form } from "react-bootstrap";
import React, { Component } from "react";
import ModalDialogBox from './ModalDialogBox';

export default class EditListSettings extends ModalDialogBox 
{
    constructor(props)
    {
        super(props, "edit-list-settings");
    }

    countCharacters = (event) => {
        const charCount = event.target.value.length;
        this.setState({[event.target.id + '_length']: charCount})
    }

    renderHeader()
    {
        return (
            <>
                <Modal.Title>
                    Edit List Settings
                </Modal.Title>
            </>
        );
    }

    resetState()
    {
        super.resetState();
        this.setState({
            list_description_textarea_length: 0,
            list_title_input_length: 0
        });
    }

    renderBody()
    {
        let maxTitleLength = 50;
        let maxDescriptionLength = 150;
        return (
            <Form>
                <Form.Group>
                    <Form.Label> 
                        List Title
                    </Form.Label>
                    <Form.Control 
                        id="list_title_input"
                        as="input" 
                        maxlength={maxTitleLength}
                        onChange={this.countCharacters}
                        defaultValue={this.props.listSettings.title}
                    />
                    <Form.Text>
                        ({this.state.list_title_input_length || this.props.listSettings.title.length} / {maxTitleLength})
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label> 
                        List Description
                    </Form.Label>
                    <Form.Control 
                        id="list_description_textarea"
                        as="textarea"
                        rows="3"
                        maxLength={maxDescriptionLength}
                        defaultValue={this.props.listSettings.description}
                        onChange={this.countCharacters}
                    />
                    <Form.Text>
                        ({this.state.list_description_textarea_length || this.props.listSettings.description.length} / {maxDescriptionLength})
                    </Form.Text>
                </Form.Group>
            </Form>
        );
    }
}