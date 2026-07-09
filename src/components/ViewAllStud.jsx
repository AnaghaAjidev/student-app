import React from 'react'
import StudHeader from './StudHeader'

const students = [
  { admNo: "S101", name: "Rahul Sharma", dob: "12-05-2006", gender: "Male", grade: "10", section: "A", parent: "Ramesh Sharma", phone: "9876543210", email: "rahul@gmail.com", address: "Kochi" },
  { admNo: "S102", name: "Anjali Nair", dob: "20-08-2007", gender: "Female", grade: "9", section: "B", parent: "Suresh Nair", phone: "9876543211", email: "anjali@gmail.com", address: "Trivandrum" },
  { admNo: "S103", name: "Arjun Das", dob: "15-03-2006", gender: "Male", grade: "10", section: "A", parent: "Ravi Das", phone: "9876543212", email: "arjun@gmail.com", address: "Thrissur" },
  { admNo: "S104", name: "Meera Pillai", dob: "02-01-2007", gender: "Female", grade: "9", section: "C", parent: "Ajith Pillai", phone: "9876543213", email: "meera@gmail.com", address: "Kottayam" },
  { admNo: "S105", name: "Vishnu Raj", dob: "18-07-2006", gender: "Male", grade: "10", section: "B", parent: "Rajan", phone: "9876543214", email: "vishnu@gmail.com", address: "Palakkad" },
  { admNo: "S106", name: "Sneha Thomas", dob: "10-09-2007", gender: "Female", grade: "9", section: "A", parent: "Thomas", phone: "9876543215", email: "sneha@gmail.com", address: "Kannur" },
  { admNo: "S107", name: "Akash Kumar", dob: "30-11-2006", gender: "Male", grade: "10", section: "C", parent: "Sunil Kumar", phone: "9876543216", email: "akash@gmail.com", address: "Kollam" },
  { admNo: "S108", name: "Diya Joseph", dob: "25-02-2007", gender: "Female", grade: "9", section: "B", parent: "Joseph", phone: "9876543217", email: "diya@gmail.com", address: "Alappuzha" },
  { admNo: "S109", name: "Nikhil Menon", dob: "11-12-2006", gender: "Male", grade: "10", section: "A", parent: "Menon", phone: "9876543218", email: "nikhil@gmail.com", address: "Ernakulam" },
  { admNo: "S110", name: "Aparna S", dob: "08-04-2007", gender: "Female", grade: "9", section: "C", parent: "Sasidharan", phone: "9876543219", email: "aparna@gmail.com", address: "Malappuram" }
]

const ViewAllStud = () => {
  return (
    <>
    <StudHeader />
    <div className="container mt-5">
      <h2 className="text-center mb-4">View All Students</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Admission No</th>
              <th>Name</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Class</th>
              <th>Section</th>
              <th>Parent</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.admNo}>
                <td>{student.admNo}</td>
                <td>{student.name}</td>
                <td>{student.dob}</td>
                <td>{student.gender}</td>
                <td>{student.grade}</td>
                <td>{student.section}</td>
                <td>{student.parent}</td>
                <td>{student.phone}</td>
                <td>{student.email}</td>
                <td>{student.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default ViewAllStud