import axios from "axios";
import { useEffect, useState } from "react";

function ContactPage() {
  const [routes, setRoute] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5030/Contact")
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

export default ContactPage;
