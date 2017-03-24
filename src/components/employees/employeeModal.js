import React, {Component} from 'react'
import {Button, Modal, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

export default class EmployeeModal extends Component {
    render(){
        const modal = this.props.modal;
        const departments = this.props.departments;
        return (
            <Modal show={modal.show} onHide={this.props.hideModal.bind(this)}>
                <Modal.Header>
                    <Modal.Title>Edit department</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <FormGroup controlId="formBasicText">
                        <ControlLabel>Employee first name:</ControlLabel>
                        <FormControl
                            type="text" ref="employeeFirstName"
                            defaultValue={modal.firstName}
                        />
                    </FormGroup>
                    <FormGroup controlId="formBasicText">
                        <ControlLabel>Employee last name:</ControlLabel>
                        <FormControl
                            type="text" ref="employeeLastName"
                            defaultValue={modal.lastName}
                        />
                    </FormGroup>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Select department</ControlLabel>
                        <FormControl componentClass="select" ref="employeeDepartmentId" defaultValue={modal.departmentId}>

                            {departments.map((department, index) => (
                                <option value={department.id} key={index}>{department.name}</option>
                            ))}
                        </FormControl>
                    </FormGroup>
                    <Button type="submit" onClick={this.props.editEmployee.bind(this)}>Submit</Button>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.props.hideModal.bind(this)}>Close</Button>
                </Modal.Footer>

            </Modal>
        )
    }
}