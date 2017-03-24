import React, {Component} from 'react'
import {render, findDOMNode} from 'react-dom'
import {connect} from 'react-redux'
import {requireDepartment, openModal, closeModal, editDepartment} from '../../actions/departmentActions'
import DepartmentModal from './departmentModal'
import {Grid, Table, Col, Row, Button} from 'react-bootstrap'

class DepartmentList extends Component {

    componentWillMount() {
        document.title = 'Departments';
        this.props.dispatch(requireDepartment());
    }

    showModal(department) {
        this.props.dispatch(openModal(department));
    }

    hideModal() {
        this.props.dispatch(closeModal());
    }

    editDepartment() {
        let newDepartment = {
            id: this.props.modal.id,
            name: findDOMNode(this.refs.departmentName).value
        };

        this.props.dispatch(editDepartment(newDepartment));
        this.props.dispatch(closeModal());
    }

    render() {
        const departments = this.props.departments;
        const modal = this.props.modal;
        return (
            <div>
                <Grid className="departments">
                    <Row>
                        <Col lg={4}>
                            <h1>
                                <span>Department list</span>
                            </h1>
                        </Col>
                    </Row>
                    <Table className="departmentsList">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {departments.map((department, index) => (
                            <tr key={index} className="department">
                                <td>{index + 1}</td>
                                <td>{department.name}</td>
                                <td>
                                    <Button
                                        onClick={this.showModal.bind(this, department)}>Edit</Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Grid>
                <DepartmentModal modal={modal} hideModal={this.hideModal} departments={departments} editDepartment={this.editDepartment} dispatch={this.props.dispatch}/>
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        departments: state.departments.list,
        modal: state.departments.modal
    }
};

export default connect(mapStateToProps)(DepartmentList);