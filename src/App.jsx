import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import React, { useReducer, useRef, useEffect, useState } from "react";
import { SectionsContainer, Section } from "react-fullpage";

import Footer from "./component/common/Footer";
import Header from "./component/common/Header";
import Main from "./pages/Main";
import ProjectDetail from "./pages/ProjectDetail";
const Layout = () => {
  return (
    <>
      <Header />
      <div className="contWrap">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/detail/:id" element={<ProjectDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
