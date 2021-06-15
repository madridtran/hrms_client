 import axios from "axios";
 const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employee";
 const EMPLOYEE_API_BASE_URL2 = "http://localhost:8080/api/v1";

// const getAll = () => {
//   return http.get("/employee/2/attendance");
// };

// const get = id => {
//   return http.get(`/employee/${id}/attendance`);
// };

// const create = id => {
//   return http.post(`/employee/${id}/checkIn`);
// };

// const update = (eid, aid) => {
//   return http.put(`/employee/${eid}/checkOut/${aid}`);
// };

// const remove = id => {
//   return http.delete(`/tutorials/${id}`);
// };

// const removeAll = () => {
//   return http.delete(`/tutorials`);
// };

// const findByTitle = title => {
//   return http.get(`/tutorials?title=${title}`);
// };

 class EmployeeService {


    getAttendance(){
        return axios.get(EMPLOYEE_API_BASE_URL+'/attendance');
     }
   checkInAttendance(id,attendanceDetail){
      return axios.post(EMPLOYEE_API_BASE_URL+`/${id}/checkIn`,attendanceDetail);
   }
   getEmployee(){
      return axios.get(EMPLOYEE_API_BASE_URL);
   }
   checkOutAttendance(id,attendanceDetail){
      return axios.put(EMPLOYEE_API_BASE_URL+`/${id}/checkOut`,attendanceDetail);
   }
//     getEmployeeAttendanceById(employeeId){
//         return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
//     }

//     updateEmployee(employee, employeeId){
//         return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
//     }

//     deleteEmployee(employeeId){
//         return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
//     }
}

export default new EmployeeService()