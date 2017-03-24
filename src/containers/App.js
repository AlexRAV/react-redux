import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Sidebar from 'react-sidebar'
import {connect} from 'react-redux'
import {showSidebar, hideSidebar} from '../actions/sidebarActions'
import DepartmentList from '../components/departments/departmentsList'
import EmployeesList from '../components/employees/employeesList'

class App extends Component {


    onSetSidebarOpen() {
        this.props.dispatch(showSidebar());
    }

    closeSidebar() {
        this.props.dispatch(hideSidebar());
    }

    style = {
        sidebarList: {
            minWidth: '200px',
            backgroundColor: 'white',
            width: '100%',
            height: '100%',
            marginBottom: '0',
            padding: '0',
            boxSizing: 'border-box'
        },
        sidebarItem: {
            display: 'block',
            width: '100%',
            padding: '10px',
            boxSizing: 'border-box',
            borderBottom: '1px solid #ccc',
            backgroundColor: 'white'
        },
        marginTop: {
            marginTop: '30px'
        }
    };

    content = (
        <ul style={this.style.sidebarList}>
            <li style={this.style.sidebarItem}>
                <Link to="/" onClick={this.closeSidebar.bind(this)}>Departments</Link>
            </li>
            <li style={this.style.sidebarItem}>
                <Link to="/employees" onClick={this.closeSidebar.bind(this)}>Employees</Link>
            </li>
        </ul>
    );

    render() {
        const sidebarShow = this.props.sidebar;
        return (
            <div>
                <Sidebar sidebar={this.content} open={sidebarShow}
                         onSetOpen={this.onSetSidebarOpen.bind(this)}>
                    <Grid style={this.style.marginTop}>
                        <Row>
                            <Col lg={4}>
                                <div onClick={this.onSetSidebarOpen.bind(this)}
                                     className="glyphicon glyphicon-align-justify"></div>
                            </Col>
                        </Row>
                    </Grid>
                    <Route exact={true} path="/" component={DepartmentList}/>
                    <Route path="/employees" component={EmployeesList}/>
                </Sidebar>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar.show
    }
};

export default connect(mapStateToProps)(App);