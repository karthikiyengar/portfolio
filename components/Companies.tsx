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

const Companies: React.FC = () => {
  return (
    <>
      <GlobalTimelineStyle />
      <VerticalTimeline
        animate={false}
        layout={"1-column-right" as any}
        className="vertical-timeline-custom-line vertical-timeline"
      >
        {companies.map((item) => {
          return (
            <Link href={`/companies/${item.slug}`} passHref key={item.slug}>
              <StyledLink>
                <VerticalTimelineElement
                  style={{ margin: "0", cursor: "pointer" }}
                  date={item.tenure}
                  contentStyle={{
                    boxShadow: "none",
                    paddingLeft: "0",
                    background: "none",
                  }}
                  iconStyle={{
                    background: "white",
                    margin: "0 -17px",
                    padding: "5px 0",
                    width: "65px",
                    height: "65px",
                    boxShadow: "none",
                    top: "25%",
                  }}
                  contentArrowStyle={{ display: "none" }}
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
