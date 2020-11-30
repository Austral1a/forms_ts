import React, { FC } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Login } from "@Login";
import { Employees } from "@Employees";
import { useSelector } from "react-redux";
import { ErrorHandler } from "./ErrorHandler";
import { selectIsUserLoggedIn } from "@StoreLogin";

export const Main: FC = () => {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);

  return (
    <>
      <ErrorHandler />
      <Employees />
      {/*<Router>
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
      </Router>*/}
    </>
  );
};
