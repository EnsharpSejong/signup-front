import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login, Signup, MyInfo, FindPassword, ResetPassword } from "./pages";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/my-info" element={<MyInfo />} />
                <Route path="/find-password" element={<FindPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
            </Routes>
        </Router>
    );
}

export default App;
