import React, { FC, ReactElement } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Login } from "@Login";
import { Employees } from "@Employees";
import { useSelector } from "react-redux";
import { ErrorHandler } from "./ErrorHandler";
import { selectIsUserLoggedIn } from "@StoreLogin";
import mainStyles from "./styles/main.module.scss";

export const Main: FC = (): ReactElement => {
  // const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const isUserLoggedIn = true;
  return (
    <div className={mainStyles["main"]}>
      <ErrorHandler />
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
    </div>
  );
};
