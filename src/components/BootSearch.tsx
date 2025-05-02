import React, { useState } from "react";

import '../css/bootsearch.css'
import { useNavigate } from "react-router-dom";

export default function BootSearch() {

    const resPage = useNavigate();

    const [rollno,setRollno] = useState("");


    const showRes = ()=>{
      console.log("rollno---->"+rollno);
        resPage("/Result/"+rollno);
    }
const getRollNo =(e:any)=>{
setRollno(e.target.value);
}

  return (
    <div>
      <div className="container">
        <div className="search">
          <div className="row">
            <div className="col-md-6">
              <div className="search-1">
                <i className="bx bx-search-alt"></i>
                <input 
                onChange={getRollNo}
                type="text"
                 placeholder="Enter Roll Number" />
              </div>{" "}
            </div>{" "}
            <div className="col-md-6">
              {" "}
              <div>
                <div className="search-2">
                  <i className="bx bxs-map"></i>
                  <button  onClick={showRes} >Submitt</button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
