import React from "react";
import Link from "next/link";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { createGlobalStyle } from "styled-components";
import { companies } from "../data/companies";
import { withRouter } from "next/router";

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
                background: "white",
                margin: "-5px",
                width: "50px",
                height: "50px",
                boxShadow: "none",
                top: "25%",
              }}
              icon={<img src={item.thumbnail} height="100%" width="auto" />}
            >
              <h3 style={{ margin: "5px 0" }}>{item.title}</h3>
              <div>{item.role}</div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </>
  );
};

export default Companies;
