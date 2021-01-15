
import { Modal, Button } from "react-bootstrap";
import React, { Component } from "react";

class ModalDialogBox extends Component 
{
    constructor(props, dialogBoxName)
    {
        super(props);
        this.state = {show: false, modalName: dialogBoxName};
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
        return(
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
                    {this.renderBody()}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary"
                    onClick={this.closeModal}>
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

export default EditItem;