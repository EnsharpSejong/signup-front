import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login, Signup, MyInfo, FindPassword, ResetPassword } from "./pages";
import {
    ROUTE_FIND_PASSWORD_PAGE,
    ROUTE_LOGIN_PAGE,
    ROUTE_MY_INFO_PAGE,
    ROUTE_RESET_PASSWORD_PAGE,
    ROUTE_SIGNUP_PAGE,
} from "./constant";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={ROUTE_LOGIN_PAGE} element={<Login />} />
                <Route path={ROUTE_SIGNUP_PAGE} element={<Signup />} />
                <Route path={ROUTE_MY_INFO_PAGE} element={<MyInfo />} />
                <Route path={ROUTE_FIND_PASSWORD_PAGE} element={<FindPassword />} />
                <Route path={ROUTE_RESET_PASSWORD_PAGE} element={<ResetPassword />} />
            </Routes>
        </Router>
    );
}

export default App;
