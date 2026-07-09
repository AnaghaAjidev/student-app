import React from 'react'
import StudHeader from './StudHeader'

const DeleteStud = () => {
  return (
    <>
    <StudHeader />
    <div className="container mt-5">
      <div className="card p-4 shadow col-md-6 mx-auto">
        <h3 className="text-center mb-3">Delete Student</h3>

        <label className="form-label">Admission Number</label>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter Admission Number"
        />

        <button className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
    </>
  )
}

export default DeleteStud