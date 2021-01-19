
import { Modal, Button } from "react-bootstrap";
import React, { Component } from "react";

class ModalDialogBox extends Component 
{
    constructor(props, dialogBoxName)
    {
        super(props);
        this.state = {show: (false || props.openModal), modalName: dialogBoxName};
        // Bind modal methods
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
    }

    openModal ()
    {
        this.setState({show:true});
    }
    
    closeModal ()
    {
        this.setState({show:false});
        this.props.onHide();
    }

    saveChanges ()
    {
        this.closeModal();
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

    renderHeader()
    {
        return (
            <Modal.Title>
                Insert Title Here
            </Modal.Title>
        );
    }

    renderBody()
    {
        return (
            <>
                <div>
                    Test Body Here
                </div>
            </>
        );
    }

    renderFooter()
    {
        return (
            <>
                <Button 
                    variant="outline-primary"
                    onClick={this.saveChanges}
                >
                    Save Changes
                </Button>
                <Button 
                    variant="outline-secondary" 
                    onClick={this.closeModal}
                >
                    Cancel
                </Button>
            </>
        );
        
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
                    {this.renderHeader()}
                </Modal.Header>
                <Modal.Body>
                    {this.renderBody()}
                </Modal.Body>
                <Modal.Footer>
                    {this.renderFooter()}
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ModalDialogBox;