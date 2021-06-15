import React, { Component } from "react";
import AttendanceServices from "../services/AttendanceServices";

class CheckIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      employeeId: "",
    };
    // this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    // this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    // this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
  }

  // step 3
  // componentDidMount(){

  //     // step 4
  //     if(this.state.id === '_add'){
  //         return
  //     }else{
  //         EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
  //             let employee = res.data;
  //             this.setState({firstName: employee.firstName,
  //                 lastName: employee.lastName,
  //                 emailId : employee.emailId
  //             });
  //         });
  //     }
  // }
  checkIn = (e) => {
     e.preventDefault();
     var id = this.state.employeeId;
     var employeeDetail = [];
     console.log(id)
     AttendanceServices.checkInAttendance(id,employeeDetail).then(res =>{
               this.props.history.push('/');
            });
    // step 5
    // if(this.state.id === '_add'){
    //     EmployeeService.createEmployee(employee).then(res =>{
    //         this.props.history.push('/employees');
    //     });
    // }else{
    //     EmployeeService.updateEmployee(employee, this.state.id).then( res => {
    //         this.props.history.push('/employees');
    //     });
    // }
  };

  changeEmployeeId = (event) => {
    this.setState({ employeeId: event.target.value });
    console.log(this.state);
  };

  // changeLastNameHandler= (event) => {
  //     this.setState({lastName: event.target.value});
  // }

  // changeEmailHandler= (event) => {
  //     this.setState({emailId: event.target.value});
  // }

  cancel() {
    this.props.history.push("/");
  }

  // getTitle(){
  //     if(this.state.id === '_add'){
  //         return <h3 className="text-center">Add Employee</h3>
  //     }else{
  //         return <h3 className="text-center">Update Employee</h3>
  //     }
  // }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              Nhập Id nhân viên:
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Employee ID: </label>
                    <input
                      placeholder="EmployeeId"
                      name="employeeId"
                      className="form-control"
                      onChange={this.changeEmployeeId}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.checkIn}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckIn;
