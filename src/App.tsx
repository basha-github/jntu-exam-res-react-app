import React from "react";
import Search from "./components/Search";
import BootSearch from "./components/BootSearch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResultPage from "./components/ResultPage";
import AddStuMarks from "./components/AddStuMarks";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BootSearch />} />
          <Route path="/Result/:id" element={<ResultPage />} />
          <Route path="/stuMarks" element={<AddStuMarks />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
