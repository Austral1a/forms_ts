import React, { FC } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Login } from "./Login";
import { Employees } from "./Employees";
import { useSelector } from "react-redux";

export const Main: FC = () => {
  const isUserLoggedIn = useSelector(
    (state: { loginReducer: { isLogged: boolean } }) =>
      state.loginReducer.isLogged
  );

  return (
    <Router>
      <Route path="/">
        {isUserLoggedIn ? (
          <Redirect to="/employees" />
        ) : (
          <Redirect to="/login" />
        )}
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/employees">
        <Employees />
      </Route>
    </Router>
  );
};
