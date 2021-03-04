import React from "react";
import Link from "next/link";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { createGlobalStyle } from "styled-components";
import { companies } from "../data/companies";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  :visited,
  :hover,
  :active {
    color: inherit;
  }
`;

const GlobalTimelineStyle = createGlobalStyle`
  .vertical-timeline.vertical-timeline-custom-line::before {
    background: #424242;
  }
  .vertical-timeline {
    margin: 0;
    padding: 0;
  }
`;

const Companies = () => {
  return (
    <>
      <GlobalTimelineStyle />
      <VerticalTimeline
        layout={"1-column-right"}
        className="vertical-timeline-custom-line vertical-timeline"
      >
        {companies.map((item) => {
          return (
            <Link href={`/companies/${item.slug}`} passHref>
              <StyledLink>
                <VerticalTimelineElement
                  style={{ margin: "0", cursor: "pointer" }}
                  date={item.tenure}
                  contentStyle={{ boxShadow: "none", paddingLeft: "0" }}
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
              </StyledLink>
            </Link>
          );
        })}
      </VerticalTimeline>
    </>
  );
};

export default Companies;
