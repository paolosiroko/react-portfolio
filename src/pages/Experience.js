import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  return (
    <div
      className="experience"
      style={{ backgroundColor: "rgba(253, 166, 60, 0.89)" }}
    >
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2016"
          iconStyle={{ background: "bisque", color: "#fff" }}
          icon={""}
        >
          <h3 className="vertical-timeline-element-title">
            Mbale High School, mbale, kenya
          </h3>
          <p> High School Certificate</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2021"
          iconStyle={{ background: "bisque", color: "#fff" }}
          icon={""}
        >
          <h3 className="vertical-timeline-element-title">
            Laikipia University, Nyahururu, Kenya
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p>
            Information and Communication Technology where i started learning
            Web development and Software Engineering
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2021"
          iconStyle={{ background: "bisque", color: "#fff" }}
          icon={""}
        >
          <h3 className="vertical-timeline-element-title">
            Intern - Parliamentary Service of Kenya , Senate
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Nairobi, Kenya</h4>
          <p>
            helped in achieving the vision of going paperless by 2030, while
            still learning Web development online.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "bisque", color: "#fff" }}
          icon={""}
        >
          <h3 className="vertical-timeline-element-title">
            Intern - Kenya School of Government (KSG)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Lower Kabete , Kenya
          </h4>
          <p>
            Developed 2 major Projects, dashboards for data management and
            retrieval by working both in the front end and back end.I used
            python Django framework and react js.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
