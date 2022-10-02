import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Users from "./components/users/Users";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Users />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
