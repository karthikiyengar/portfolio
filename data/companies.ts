import { Technology } from "../components/Tools";

type Context = "fulltime" | "freelance" | "consultant";

interface BasicDetails {
  title: string;
  role: string;
  slug: string;
  thumbnail: string;
  tenure: string;
}
export interface Company extends BasicDetails {
  context?: Context;
  location?: string;
  companyUrl?: string;
  image?: string;
  tools?: Array<Technology>;
  companyDescription?: string;
  roleDescription?: string;
}

export const companies: Company[] = [
  {
    title: "Shopify",
    role: "Senior Developer",
    context: "fulltime",
    roleDescription: `I joined Shopify in late 2021 to work on their retail offerings. Stay tuned for updates.`,
    companyUrl: "https://www.shopify.com/",
    companyDescription:
      "Shopify is a complete commerce platform that lets you start, grow, and manage a business.",
    location: "Berlin",
    tenure: "2021 - Present",
    image: "/static/companies/shopify.png",
    thumbnail: "/static/companies/shopify-thumb.svg",
    slug: "shopify",
    tools: ["typescript", "react", "ruby"],
  },
  {
    title: "Klarna",
    role: "Senior Software Engineer",
    context: "fulltime",
    roleDescription: `In my initial year at Klarna, I worked in a team that developed end-to-end solutions to augment Klarna's offerings, primarily to acquire merchants. As of currently, I've been working on shipping the company's first browser extension that enables shoppers to use Klarna on any merchant.\r\n\r\nResponsibilities included architecting software solutions around Klarna's payments infrastructure, communicating with clients, stakeholders and teams, development, testing and provisioning for performance across the stack.`,
    companyUrl: "https://www.klarna.com/",
    companyDescription:
      "Klarna is one of the world's leading payment providers and a licensed bank that is fundamentally changing the payment experience for buyers and merchants",
    location: "Berlin",
    tenure: "2019 - 2021",

    image: "/static/companies/klarna.jpg",
    thumbnail: "/static/companies/klarna-thumb.svg",
    slug: "klarna",
    tools: [
      "typescript",
      "react",
      "jira",
      "jenkins",
      "aws",
      "redis",
      "chrome-web-store",
      "postgres",
      "dynamodb",
    ],
  },
  {
    title: "Spotcap Global Services",
    companyDescription:
      "Spotcap is a leading global fintech company operating in the online lending space",
    companyUrl: "https://www.spotcap.com/",
    roleDescription: `At Spotcap, I was responsible for building the Frontend of our primary underwriting platform used to review loan applications. I made crucial engineering decisions that simplified and standardised existing code. Some of them included moving from a multi-store Redux architecture to a consolidated store, introducing TypeScript, heavily refactoring to a highly functional style of programming and introducing sagas to handle complex caching requirements.\r\n\r\nAdditionally, I introduced a strong testing culture to the team and set up a framework to rapidly build, document and validate components. These components are now to be used across projects, reducing development time and improving consistency. I am also responsible for interviewing candidates and bringing them up to speed with our style of programming.`,
    context: "fulltime",
    role: "Frontend Engineer",
    location: "Berlin",
    tenure: "2017 - 2019",
    thumbnail: "/static/companies/spotcap-thumb.png",
    image: "/static/companies/spotcap.png",
    slug: "spotcap",
    tools: ["typescript", "react", "redux", "nodejs", "jenkins", "jira"],
  },
  {
    title: "Self-Employed",
    role: "Freelance Engineer & Consultant",
    slug: "freelance",
    context: "consultant",
    thumbnail: "/static/companies/freelance-thumb.png",
    tenure: "2016 - 2017, 2013 - 2015",
  },
  {
    title: "Paper Plane Design Solutions",
    companyDescription:
      "Paper Plane is a full-service Digital Agency with more than 10 years of Strategy, Design & User experience",
    roleDescription: `As an architect in PaperPlane, I was tasked with architecting an omni-channel Web Store implementation using Oracle’s NetSuite SuiteCommerce Advanced platform for a large Swiss retailer. I led meetings between the firm, vendors and clients, translated outcomes into work items and performed quick spikes to determine optimal implementation approaches.\r\n\r\nAs a Process Consultant, I was responsible for overhauling company development processes, introducing best practices, hiring and improving developer efficiency. We iterated, improved and implemented changes to move the company from 3/12 on the Joel’s test to 11/12. I worked on improving our estimation methodologies, achieving a 40% improvement in accuracy and predicatability. We also invested extensive effort in finding an Agile methedology that worked best for our team.`,
    role: "Process & Tech Architect",
    companyUrl: "http://paperplane.net/",
    context: "consultant",
    location: "Mumbai",
    tenure: "2016 - 2017",
    image: "/static/companies/paperplane.png",
    thumbnail: "/static/companies/paperplane-thumb.png",
    slug: "paperplane",
    tools: ["nodejs", "angularjs", "backbone", "php", "scrum", "jira"],
  },
  {
    title: "Novanet",
    companyDescription:
      "Novanet is a design-centric multinational cloud communications company",
    companyUrl: "https://novanet.net",
    roleDescription: `I served as the Lead Frontend Developer for a for a SaaS VoIP platform, in use by 75+ contact centers. I took over a legacy AngularJS codebase and was tasked with re-architecting it. I objectively evaluated available technology choices by factoring performance, maintainability and team learning curve and led the React/Redux rewrite of the platform. Apart from the domain specific technical challenges, I was also tasked with overseeing the design team to help them determine problematic edge cases before development time was invested.\r\n\r\nAs this was a user-facing website, a lot of my time was also spent on performance optimisation and reducing site-load times. I was also responsible for recruiting and mentoring junior resources to the company.`,
    role: "Lead Frontend Engineer",
    image: "/static/companies/novanet.png",
    context: "fulltime",
    thumbnail: "/static/companies/novanet-thumb.png",
    tenure: "2016",
    location: "Mumbai",
    slug: "novanet",
    tools: ["nodejs", "angularjs", "react", "redux", "sketch", "trello"],
  },
  {
    title: "Indus Valley Partners",
    companyUrl: "https://www.ivp.in/",
    companyDescription:
      "IVP is the largest solutions firm focused on the Alternative Asset Management industry",
    roleDescription: `I served as a consulting developer working on a data warehouse implementation for a Swiss hedge fund with an inflow of around ​3 million transactions per day. Roles included requirement analysis, development, testing, deployment and production support. As part of an incredibly fast-paced environment with mission critical systems, I learnt much about designing enterprise systems and developed a keen interest in the trade lifecycle. \r\n\r\nI was also awarded the “Best New Recruit”​ award among 20 new joiners to the company. In terms of technology, most of my time was spent writing C# code and dealing with data architecture challenges using T-SQL.`,
    role: "Software Engineer",
    tenure: "2015 - 2016",
    context: "fulltime",
    location: "Mumbai",
    image: "/static/companies/ivp.png",
    thumbnail: "/static/companies/ivp-thumb.png",
    slug: "ivp",
    tools: ["c#", "mssql", "angularjs", "jenkins", "scrum", "jira"],
  },
];
