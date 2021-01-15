
import { Modal, Button } from "react-bootstrap";
import React, { Component } from "react";

class ModalDialogBox extends Component 
{
    constructor(props, dialogBoxName)
    {
        super(props);
        this.state = {show: false || props.openModal, modalName: dialogBoxName};
    }

    openModal = () =>
    {
        this.setState({show:true});
    }

    resetState()
    {
        this.setState({show:false});
    }
    
    closeModal = () =>
    {
        this.resetState();
        this.props.onHide();
    }

    saveChanges = (data) =>
    {
        this.closeModal();
    }

    componentDidUpdate(prevProps)
    {
        const {show, modalName} = this.props;
        if(prevProps.show !== show && prevProps.modalName === this.modalName)
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

    renderBody()
    {
        return (
            <form>
                <div class="form-group">
                    <label> List Title </label>
                    <input type="text" class="form-control"></input>
                </div>
                <div class="form-group">
                    <label> List Description </label>
                    <textarea class="form-control" rows="2"></textarea>
                </div>
            </form>
        );
    }

    renderTitle()
    {
        return (
            <Modal.Title>
                Insert Title Here
            </Modal.Title>
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
                    {this.renderTitle()}
                </Modal.Header>
                <Modal.Body>
                    {this.renderBody()}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary"
                    onClick={this.saveChanges}>
                        Save Changes
                    </Button>
                    <Button variant="outline-secondary" 
                    onClick={this.closeModal}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ModalDialogBox;