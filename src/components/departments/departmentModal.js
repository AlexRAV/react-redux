import React, {Component} from 'react'
import {Button, Modal, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

export default class DepartmentModal extends Component {
    render(){
        const modal = this.props.modal;
        return (
            <Modal show={modal.show} onHide={this.props.hideModal.bind(this)}>
                <Modal.Header>
                    <Modal.Title>Edit department</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <FormGroup controlId="formBasicText">
                        <ControlLabel>Employee first name:</ControlLabel>
                        <FormControl
                            type="text" ref="departmentName"
                            defaultValue={modal.name}
                        />
                    </FormGroup>
                    <Button type="submit" onClick={this.props.editDepartment.bind(this)}>Submit</Button>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.props.hideModal.bind(this)}>Close</Button>
                </Modal.Footer>

            </Modal>
        )
    }
}