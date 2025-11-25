import axios from "axios";
import { useEffect, useState } from "react";

export default function About() {
  const [routes, setRoute] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5030/About")
      .then((e) => {
        setRoute(e.data);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  return (
    <>
      <div>
        <h2>{routes}</h2>
      </div>
    </>
  );
}
