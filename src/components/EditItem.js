
import { Modal, Button } from "react-bootstrap";
import React, { Component } from "react";
import './EditItem.scss';

class EditItem extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {show: false}
    }

    openModal = () =>
    {
        this.setState({show:true});
    }

    closeModal = () =>
    {
        this.setState({show:false});
        this.props.onHide();
    }

    componentDidUpdate(prevProps)
    {
        const {show} = this.props;
        if(prevProps.show !== show)
        {
            if(show===true)
            {
                this.openModal();
            }
            else
            {
                this.closeModal();
            }
        }
    }

    render()
    {
        return (
            <Modal
                show={this.state.show}
                onHide={this.closeModal}
                centered
                >
                <Modal.Header>
                    <Modal.Title>
                        Edit List Settings
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Here will be the form.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary"
                    onClick={this.closeModal}>
                        Save Changes
                    </Button>
                    <Button variant="outline-secondary" 
                    onClick={this.closeModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default EditItem;