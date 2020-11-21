import { rootReducer } from "./rootReducer";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { loginRequest } from "./Login";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(loginRequest);
