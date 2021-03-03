import React from "react";
import Link from "next/link";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { createGlobalStyle } from "styled-components";
import { companies } from "../data/companies";

const GlobalTimelineStyle = createGlobalStyle`
  .vertical-timeline.vertical-timeline-custom-line::before {
    background: #424242;
  }
`;

type Data = {
  title: string;
  image: string;
  link: string;
};

const customTheme = {
  yearColor: "#405b73",
  lineColor: "#d0cdc4",
  dotColor: "#262626",
  borderDotColor: "#d0cdc4",
  titleColor: "#405b73",
  subtitleColor: "#bf9765",
  textColor: "#262626",
};

const Companies = () => {
  return (
    <>
      <GlobalTimelineStyle />
      <VerticalTimeline
        layout={"1-column-left"}
        className="vertical-timeline-custom-line vertical-timeline"
      >
        {companies.map((item) => {
          return (
            <VerticalTimelineElement
              style={{ margin: "0" }}
              date={item.tenure}
              contentStyle={{ boxShadow: "none" }}
              iconStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
                top: "25%",
              }}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <div>{item.role}</div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </>
  );
};

export default Companies;
