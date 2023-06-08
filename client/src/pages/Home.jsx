import React,{useEffect,useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

function Home() {
    const [student,setStudent] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8800/api/students")
        .then(res => {
            console.log(res)
            setStudent(res.data)
        })
        .catch(err => console.log(err))
    
    }, []);

    const handleDelete = (id) => {
        axios.delete("http://localhost:8800/api/students/delete/"+id)
        .then(res => {
            window.location.reload();
        })
        .catch(err => console.log(err))


    }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-60 bg-white rounded p-3">
            <h2>Student List</h2>
           <div className="d-flex justify-content-end">
           <Link to="/add" className="btn btn-primary">Add +</Link>
           </div>
            <tabel className="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((student,index) =>
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.contact}</td>
                        <td>
                            <Link to={`/read/${student.id}`} className="btn btn-sm btn-secondary me-2">Read</Link>
                            <Link to = {`/edit/${student.id}`} className="btn btn-sm btn-info me-2">Edit</Link>
                            <button className="btn btn-sm btn-danger" onClick={()=>handleDelete(student.id)}>Delate</button>
                        </td>
                    </tr>)}
                   
                    
                    
                </tbody>

            </tabel>

    </div>
    </div>
  )
}

export default Home