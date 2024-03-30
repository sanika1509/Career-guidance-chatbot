import React, { useState } from "react";
import "./reportGenerator.css";
import { useReactToPrint } from "react-to-print";

export default function (props) {
  const [summary, setSummary] = useState({
    title: "Guidance for the IT Engineering",
    summary:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque odit magnam ab rem atque aspernatur dolorum explicabo voluptatibus sed similique, molestiae vitae nulla asperiores. Autem aliquid nostrum placeat repellat accusantium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quis tempore libero esse labore hic odio amet illo quam nam soluta est eaque ut, neque nihil tempora ipsum provident id.",
  });

  // id passed by props to fetch the summary from backend
  const { id } = props;

  // code to fetch the summary
  const fetchSummary = () => {};

  // handle printing
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div className="export-parent container m-3 center">
        <div className="print m-5" ref={componentRef}>
          <h3 className="export-header mb-3">{summary.title}</h3>
          <div className="export-body mb-4">{summary.summary}</div>
          <span className="textalign-right w-100">
            {"Time : " +
              new Date().getHours() +
              ":" +
              new Date().getMinutes() +
              ":" +
              new Date().getSeconds() +
              "  Date : " +
              new Date().getDay() +
              "/" +
              new Date().getMonth() +
              "/" +
              new Date().getFullYear()}
          </span>
        </div>

        <div className="export-btn m-5">
          <button className="btn btn-danger btn-sm" onClick={handlePrint}>Download as PDF</button>
        </div>
      </div>
    </>
  );
}
