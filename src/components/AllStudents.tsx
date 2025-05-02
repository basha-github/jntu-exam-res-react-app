import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AllStudents() {

    const goStuMarks = useNavigate();


    const [students,setStudents] = useState([]); 


useEffect(()=>{
    axios.get("http://localhost:8080/jntu/exam/stu/all").then(
        (res)=>{
setStudents(res.data);
        }
    );
});


const goToAdd = ()=>{

    goStuMarks("/stuMarks");
}

  return (
    <div>

<table className="table">
  <thead>
    <tr>
      <th scope="col">RollNo</th>
      <th scope="col">Name</th>
      <th scope="col">College</th>
      <th scope="col">Course</th>
      <th scope="col">Marks</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody>

    {students.map(
        (i)=>(
            <tr>
            <th scope="row">{i.rollNo}</th>
            <td>{i.name}</td>
            <td>{i.college}</td>
            <td>{i.course}</td>
            <td>{i.marks}</td>
            <td><button onClick={goToAdd}
             className='btn btn-warning'>ADD</button></td>
          </tr>
         
        )
    )}

   
  </tbody>
</table>



    </div>
  )
}
