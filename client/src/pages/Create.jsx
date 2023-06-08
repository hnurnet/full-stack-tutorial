import React,{useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Create() {
    const [student,setStudent] = useState({
        name:"",email:"",contact:null

    });
    const navigate = useNavigate();
   const handleChange = (e) => {
    setStudent(prev =>({...prev,[e.target.name]: e.target.value}));
   }
   const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await axios.post("http://localhost:8800/api/students/post", student);
      navigate("/");
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <h2>Add Studnet</h2>
            <form onSubmit={handleSubmit}> 
                <div className="md-3">
                    <label className="form-lavel">Name</label>
                    <input type="text" className="form-control" onChange={handleChange} name="name"/>
                </div>
                <div className="md-3">
                    <label className="form-lavel">Email</label>
                    <input type="email" className="form-control" onChange={handleChange} name="email"/>
                </div>
                <div className="md-3">
                    <label className="form-lavel">Contact</label>
                    <input type="number" className="form-control" onChange={handleChange} name="contact"/>
                </div>
                <button className="btn btn-primary mt-3">Submit</button>
            </form>

        </div>

    </div>
  )
}

export default Create