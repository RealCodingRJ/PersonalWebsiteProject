import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../HomeStyles/Home.css";
import Header from "../Header/Header";

function Home() {
  const [routes, setRoute] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5030/")
      .then((e) => {
        setRoute(e.data);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  return (
    <Fragment>
      <Header name={"Ryan"} />
      <div>
        <h2>{routes}</h2>
      </div>
    </Fragment>
  );
}

export default Home;
