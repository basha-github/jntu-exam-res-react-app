import axios from "axios";
import React, { useState } from "react";

import '../css/stures.css'
import { useNavigate } from "react-router-dom";

export default function AddStuMarks() {

const goAll = useNavigate();



    const [message,setMessage] = useState("");

  const [rollNo, setRollNo] = useState("");

  const getRollNum = (e: any) => {
    //    console.log(e.target.value);
    setRollNo(e.target.value);
  };

  const [name, setName] = useState("");

  const getName = (e: any) => {
    //  console.log(e.target.value);
    setName(e.target.value);
  };

  const [college, setCollege] = useState("");

  const getCollege = (e: any) => {
    //console.log(e.target.value);
    setCollege(e.target.value);
  };

  const [course, setCourse] = useState("");

  const getCourse = (e: any) => {
    //console.log(e.target.value);
    setCourse(e.target.value);
  };

  const [marks, setMarks] = useState("");

  const getMarks = (e: any) => {
    //console.log(e.target.value);
    setMarks(e.target.value);
  };

  const [fee, setFee] = useState("");

  const getFee = (e: any) => {
    //console.log(e.target.value);
    setFee(e.target.value);
  };

  const addStu = (e: FormDataEvent) => {
    e.preventDefault();
    console.log("hello");
    console.log("rollno--->" + rollNo);
    console.log("name----->" + name);
    console.log("college--->" + college);
    console.log("course--->" + course);
    console.log("marks--->" + marks);
    console.log("fee--->" + fee);

    const student = {
      rollNo: rollNo,
      name: name,
      college: college,
      course: course,
      marks: marks,
      fee: fee,
    };

    axios.post("http://localhost:8080/jntu/exam/add/marks", student)
    .then((res) => {
      console.log("res from spring boot-->" + res.data);
     // setMessage(res.data);
      //setRollNo(" ");
      goAll("/all");
    });
  };

  return (
    <div>
      <form>
        <div className="stuMarks">
            <h2>{message}</h2>
        </div>
        <div className="mb-3">
          <label className="form-label">Roll Number</label>
          <input type="text" className="form-control" onChange={getRollNum} />
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" onChange={getName} />
        </div>
        <div className="mb-3">
          <label className="form-label">College</label>
          <input type="text" className="form-control" onChange={getCollege} />
        </div>
        <div className="mb-3">
          <label className="form-label">Course</label>
          <input type="text" className="form-control" onChange={getCourse} />
        </div>
        <div className="mb-3">
          <label className="form-label">Marks</label>
          <input type="text" className="form-control" onChange={getMarks} />
        </div>
        <div className="mb-3">
          <label className="form-label">Fee</label>
          <input type="text" className="form-control" onChange={getFee} />
        </div>
        <button onClick={addStu} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
