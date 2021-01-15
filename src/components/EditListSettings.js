
import { Modal, Button, Form } from "react-bootstrap";
import React, { Component } from "react";
import ModalDialogBox from './ModalDialogBox';
import './EditListSettings.scss';

class EditListSettings extends ModalDialogBox 
{
    constructor(props)
    {
        super(props, "edit-list-settings");
    }

    countCharacters = (event) => {
        const charCount = event.target.value.length;
        this.setState({[event.target.id + '_length']: charCount})
    }

    renderTitle()
    {
        return (
            <Modal.Title>
                Edit List Settings
            </Modal.Title>
        );
    }

    resetState()
    {
        super.resetState();
        this.setState({
            list_description_textarea_length: 0,
            list_title_input_length: 0
        })
    }

    renderBody()
    {
        let maxTitleLength = 50;
        let maxDescriptionLength = 150;
        return (
            <Form>
                <Form.Group>
                    <Form.Label> 
                        List Title <i> <small> ({this.state.list_title_input_length || 0} / {maxTitleLength}) </small> </i> 
                    </Form.Label>
                    <Form.Control 
                        id="list_title_input"
                        as="input" 
                        maxlength={maxTitleLength}
                        onChange={this.countCharacters}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label> 
                        List Description <i> <small> ({this.state.list_description_textarea_length || 0} / {maxDescriptionLength}) </small> </i> 
                    </Form.Label>
                    <Form.Control 
                        id="list_description_textarea"
                        as="textarea"
                        rows="3"
                        maxLength={maxDescriptionLength}
                        onChange={this.countCharacters}
                    />
                </Form.Group>
            </Form>
        );
    }
}

export default EditListSettings;