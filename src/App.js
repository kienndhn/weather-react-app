// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter, Switch, HashRouter } from "react-router-dom"
import * as serviceWorker from './serviceWorker'
import Home from "./view/Home";
import Header from './component/Header';
import { getData } from './redux/action/weather';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './component/Modal';

const App = () => {
  
  const hour = new Date()
  document.body.classList.add(`g${hour.getHours()}`)
  console.log("app re-render")

  return (
    <>
      <HashRouter basename="/">
        <div className="container pt-4 d-flex flex-column" id="main-container">
          <Header />
          <main className="d-flex flex-column my-auto w-100" >
            <Route path="/" exact component={Home} />
          </main>
        </div>
        <Modal />
      </HashRouter>
    </>
  )
}

export default App;

serviceWorker.unregister()