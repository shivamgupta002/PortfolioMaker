import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Template1 from "./Template1/Template1";
import Template2 from "./Template2/Template2";

const Portfolio = () => {
  const { username } = useParams();
  const [inputs, setInputs] = useState({});
  const [activeTemplate, setActiveTemplate] = useState(null);
  const fileInputRefs = {
    template1: useRef(),
    template2: useRef(),
  };

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

  const onTemplateClick = (template) => {
    setActiveTemplate(template);
  };

  const renderTemplate = () => {
    switch (activeTemplate) {
      case "template1":
        return <Template1 data={inputs} ref={fileInputRefs.template1} />;
      case "template2":
        return <Template2 data={inputs} ref={fileInputRefs.template2} />;

      default:
        return null;
    }
  };

  return (
    <>
      <div className="pt-4 d-flex align-items-center">
        <button
          onClick={() => onTemplateClick("template1")}
          className="mx-3 btn btn-secondary"
        >
          Template 1
        </button>
        <button
          onClick={() => onTemplateClick("template2")}
          className="mx-3 btn btn-secondary"
        >
          Template 2
        </button>
      </div>
        <div className="mt-4">{renderTemplate()}</div>
    </>
  );
};

export default Portfolio;
