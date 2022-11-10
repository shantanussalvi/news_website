import React from "react"
import ReactDOM from "react-dom/client"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-social/bootstrap-social.css'
import App from "./App"
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware, crea } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers/reducer"

const store = configureStore({reducer: rootReducer}, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
