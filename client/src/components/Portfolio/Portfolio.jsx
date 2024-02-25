import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Template1 from "./Template1/Template1";
import Template2 from "./Template2/Template2";

const Portfolio = () => {
  const { username } = useParams();
  const [inputs, setInputs] = useState({});

  // console.log(username);
  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/data/${username}`
        );
        const data = response.data;
        setInputs(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchHandler();
  }, [username]);

  console.log(inputs); // Log the fetched data

  return (
    <>
      <div className="pt-4">
        {/* <Template1 data={inputs} /> */}
        <Template2 data={inputs} />
      </div>
    </>
  );
};

export default Portfolio;
