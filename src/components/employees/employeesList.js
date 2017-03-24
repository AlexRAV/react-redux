import React, {Component} from 'react'
import {render, findDOMNode} from 'react-dom'
import {connect} from 'react-redux'
import {requireEmployees, openModal, closeModal, editEmployee} from '../../actions/employeesActions'
import EmployeeModal from './employeeModal'
import {Grid, Table, Col, Row, Button} from 'react-bootstrap'

class EmployeesList extends Component {
    componentWillMount() {
        document.title = 'Employyes';
        this.props.dispatch(requireEmployees());
    }

    showModal(employee) {
        this.props.dispatch(openModal(employee));
    }

    hideModal() {
        this.props.dispatch(closeModal());
    }

    editEmployee() {
        let newEmployee = {
            id: this.props.modal.id,
            firstName: findDOMNode(this.refs.employeeFirstName).value,
            lastName: findDOMNode(this.refs.employeeLastName).value,
            departmentId: findDOMNode(this.refs.employeeDepartmentId).value
        };

        this.props.dispatch(editEmployee(newEmployee));
        this.props.dispatch(closeModal());
    }

    render() {
        const employees = this.props.employees;
        const departments = this.props.departments;
        const modal = this.props.modal;

        return (
            <div>
                <Grid className="customers">
                    <Row>
                        <Col lg={4}>
                            <h1>
                                <span>Employees list</span>
                            </h1>
                        </Col>
                    </Row>
                    <Table className="departmentsList">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Department</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {employees.map((employee, index) => (
                            <tr key={index} className="employee">
                                <td>{index + 1}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{departments[employee.departmentId].name}</td>
                                <td>
                                    <Button onClick={this.showModal.bind(this, employee)}>Edit</Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Grid>
                <EmployeeModal modal={modal} hideModal={this.hideModal} departments={departments} editEmployee={this.editEmployee} dispatch={this.props.dispatch}/>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        employees: state.employees.list,
        modal: state.employees.modal,
        departments: state.departments.list
    }
};

export default connect(mapStateToProps)(EmployeesList);