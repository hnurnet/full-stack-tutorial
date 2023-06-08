import React,{useState,useEffect} from 'react';
import {useParams,Link} from "react-router-dom";
import axios from "axios";

function Read() {
    const {id} = useParams();
    const [student,setStudent] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8800/api/students/"+id)
        .then(res =>{
            console.log(res)
            setStudent(res.data[0])
        })
        .catch(err => console.log(err))
    
    }, [id])
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
       
       <div className="w-50 bg-white rounded p-3">
        <div className="p-3">
          <h2>Student Detail</h2>
          <h2>ID : {student.id}</h2>
          <h2>Name : {student.name}</h2>
          <h3>Email : {student.email}</h3>
          <h2>Contact : {student.contact}</h2>
          <Link to="/" className="btn btn-primary me-2">Back</Link>
          <Link to={`/edit/$student.id`} className="btn btn-info">Edit</Link>
        </div>
       </div>
        </div>
  )
}

export default Read