import React from "react";

import '../css/bootsearch.css'
import { useNavigate } from "react-router-dom";

export default function BootSearch() {

    const resPage = useNavigate();


    const showRes = ()=>{
        resPage("/Result");
    }


  return (
    <div>
      <div className="container">
        <div className="search">
          <div className="row">
            <div className="col-md-6">
              <div className="search-1">
                <i className="bx bx-search-alt"></i>
                <input type="text" placeholder="Enter Roll Number" />
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
