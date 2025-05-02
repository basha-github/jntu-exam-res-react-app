import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ResultPage() {

    const {id} = useParams();
    
  const [student, setStudent] = useState("");

  useEffect(() => {
    console.log("id--->"+id);
    axios.get("http://localhost:8080/jntu/drk/exam?id="+id).then((res) => {
      setStudent(res.data);
    });
  });

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">College</th>
            <th scope="col">Course</th>
            <th scope="col">Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{student.name}</th>
            <td>{student.college}</td>
            <td>{student.course}</td>
            <td>{student.marks}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
