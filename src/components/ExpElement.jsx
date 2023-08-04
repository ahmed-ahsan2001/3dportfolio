import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Colors } from "../utils/colors";

const ExpElement = ({ img, title, place, isIti, date }) => {
  const iti = (
    <p style={{ fontSize: 12, color: Colors.grey }}>
      ● Working on Quran Majeed Application which has over 60 Million users.
      <br />
      ● Creating multiple View Controllers using Swift Ui.
      <br />
      ● Dynamically fetching data from firebase.
      <br />
      ● Bug Fixes and handling errors of Quran Majeed Application.
      <br />
    </p>
  );

  const upwork = (
    <p style={{ fontSize: 12, color: Colors.grey }}>
      • Data Scrapping using node.js of a solar website.
      <br />• Dynamic website creation using API to fetch data from database{" "}
      <br />• Developed captivating, responsive user interfaces using React.js
      for web projects.
    </p>
  );
  const zrg = (
    <p style={{ fontSize: 12, color: Colors.grey }}>
      • Html and Css to create static websites.
      <br />• Performed queries on SQL database
    </p>
  );

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: Colors.blue, color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #1c153b" }}
      date={date}
      iconStyle={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
        color: "#fff",
      }}
      icon={<img height={35} src={img} />}
    >
      <h4 className="vertical-timeline-element-title">{title}</h4>
      <h5 className="vertical-timeline-element-subtitle">{place}</h5>
    </VerticalTimelineElement>
  );
};

export default ExpElement;
