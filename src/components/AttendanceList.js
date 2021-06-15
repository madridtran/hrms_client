import React, { Component } from "react";
import AttendanceServices from "../services/AttendanceServices";
import "./Header.css";
class AttendanceList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attendances: [],
      name:[]
    }
    this.checkIn = this.checkIn.bind(this);
    this.checkOut = this.checkOut.bind(this);
    // this.addEmployee = this.addEmployee.bind(this);
    // this.editEmployee = this.editEmployee.bind(this);
    // this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  // deleteEmployee(id){
  //     EmployeeService.deleteEmployee(id).then( res => {
  //         this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
  //     });
  // }
  // viewEmployee(id){
  //     this.props.history.push(`/view-employee/${id}`);
  // }
  // editEmployee(id){
  //     this.props.history.push(`/add-employee/${id}`);
  // }

  // componentDidMount(){
  //     EmployeeService.getEmployees().then((res) => {
  //         this.setState({ employees: res.data});
  //     });
  // }

  checkIn() {
     this.props.history.push('/attendance/checkIn');
     console.log(this.props)
  }
  checkOut() {
    this.props.history.push('/attendance/checkOut');
    // console.log(this.props)
 }
  componentDidMount() {
    AttendanceServices.getAttendance().then((res) => {
      this.setState({ attendances: res.data });
      // console.log(this.state.attendances)
    });
  }
  render() {
    return (
      <div>
        <h2 className="text-center mt-20">Attendance List</h2>
        <div className="row">
          <div className="col-1">
            <button className="btn btn-primary" onClick={this.checkIn}>CheckIn</button>
          </div>
          <div className="col-2">
            <button className="btn btn-danger" onClick={this.checkOut}> CheckOut</button>
          </div>
        </div>

        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Employee_Id</th>
                <th> Họ tên</th>
                <th> CheckIn</th>
                <th> CheckOut</th>
                <th> Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.attendances.map((attendance) => (
                <tr key={attendance.id}>
                  <td> {attendance.employeeId} </td>
                  <td>{attendance.name}</td>
                  <td> {(attendance.checkin).slice(0,2)}:{((attendance.checkin).slice(3,5))*0.6} </td>
                  <td> {attendance.checkout}</td>
                  <td>{attendance.date}/{attendance.month}/2021</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AttendanceList;
