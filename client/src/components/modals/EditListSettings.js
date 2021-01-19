import { Modal, Button, Form } from "react-bootstrap";
import React, { Component } from "react";
import ModalDialogBox from '../ModalDialogBox';

// Import services
import ListSettingsDataService from '../../services/listSettings.service';

export default class EditListSettings extends ModalDialogBox 
{
    constructor(props)
    {
        super(props, "edit-list-settings");
        this.state = {
            listTitle: props.listTitle,
            listDescription: props.listDescription,
            setInitialState: false
        };
        this.countCharacters = this.countCharacters.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }

    async saveChanges()
    {
        super.saveChanges();
        let data = {
            listTitle: this.state.listTitle,
            listDescription: this.state.listDescription
        };
        await ListSettingsDataService.update(data)
            .then(res=>{
                console.log("List Settings updated successfully!");
            })
            .catch(e=>{
                console.log(e);
            });
        this.props.onEdit();
    }

    closeModal()
    {
        this.setState({
            listTitle: this.props.listTitle,
            listDescription: this.props.listDescription
        });
        super.closeModal();
    }

    countCharacters (event) 
    {
        const charCount = event.target.value.length;
        this.setState({[event.target.id + '_length']: charCount})
    }

    handleTitleChange(event)
    {
        this.setState({listTitle: event.target.value});
        this.countCharacters(event);
    }

    handleDescriptionChange(event)
    {
        this.setState({listDescription: event.target.value});
        this.countCharacters(event);
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
                        maxLength={maxTitleLength}
                        onChange={this.handleTitleChange}
                        value={this.state.listTitle}
                        placeholder="Enter list title here."
                    />
                    <Form.Text>
                        ({this.state.list_title_input_length || this.state.listTitle.length} / {maxTitleLength})
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
                        value={this.state.listDescription}
                        onChange={this.handleDescriptionChange}
                        placeholder="Enter list description here."
                    />
                    <Form.Text>
                        ({this.state.list_description_textarea_length || this.state.listDescription.length} / {maxDescriptionLength})
                    </Form.Text>
                </Form.Group>
            </Form>
        );
    }
}