import { Technology } from "../components/Tools";
import { companies } from "./companies";

interface Projects {
  title: string;
  date: string;
  image: string;
  companyDescription: string;
  images: string[];
  projectDescription: string;
  slug: string;
  role: string;
  companyUrl?: string;
  tools: Technology[];
}

export const portfolio: Projects[] = [
  {
    title: "Threatbar",
    date: "May '17",
    image: "/static/threatbar.png",
    role: "Lead Frontend Engineer",
    companyDescription:
      "Threatbar is a bug-bounty platform that helps organizations build intellectual properties and customer loyalties by enhancing security",
    images: [
      "/static/portfolio/threatbar/desktop-dashboard.png",
      "/static/portfolio/threatbar/desktop-central.png",
      "/static/portfolio/threatbar/desktop-public.png",
    ],
    projectDescription: `
- *Universal* React/Redux Application
- Multiple *roles and permissions* with separate interfaces for clients and end-users
- Interactions between end-users, clients and Threatbar by comments, and ticket assignment
- *Comprehensive Dashboard* for clients with charts that provide metrics to track usage
- Extensive sorting and filtering capabilities with pagination
- Emphasis on *security, and safe coding practices* to prevent vulnerabilities`,
    slug: "threatbar",
    tools: ["react", "redux", "nodejs", "trello"],
  },
  {
    title: "Supertax",
    role: "Frontend Consultant & Engineer",
    companyDescription:
      "A web platform that gives you complete control over your GST returns",
    slug: "supertax",
    date: "Jan '17",
    image: "/static/supertax.png",
    images: [
      "/static/portfolio/supertax/desktop-dashboard.png",
      "/static/portfolio/supertax/super_macbookair13_front.png",
      "/static/portfolio/supertax/mobile-permissions.png",
    ],
    projectDescription: `
- A fully *responsive* React/Redux Application
- Rapidly brainstormed, prototyped and delivered the platform in *2 calendar weeks*
- Insightful *charts, graphs and custom components* that provide an overview of your finances
- Extensible *multi-wizard form* with an architecture that enables you to add master/detail forms with ease
- Fully featured tables that let you *drill-down* into data, perform actions for multiple rows, filter and records export to excel
- Developed *unit tested modules* that mimic Microsoft Excel's formula autocompletion features with extensive validation
- *Flexible components* to deal with changes mandated by the business
    `,
    companyUrl: "https://www.supertax.in/",
    tools: ["react", "redux", "jira"],
  },
  {
    title: "Lyra Influence",
    image: "/static/lyra.png",
    date: "Aug '18",
    role: "Lead Backend Engineer",
    companyDescription:
      "Lyra Influence is a unique social media influencer marketing platform",
    projectDescription: `
- Engineered a performant, distributed REST API for a *marketplace* serving iOS and Web clients.
- Developed payment infrastructure involving multi-party *payments, refunds, payouts, subscriptions and referrals.*
- Analyzed *data usage patterns* to design an optimal database schema for MongoDB that retains data integrity.
- Designed and developed a *geolocated activity feed* and a *job processing microservice.*
- Integrated with Twitter, Facebook and Instagram for authorization, posting content and gathering periodic analytics.
- Built deployment pipelines for frontend and backend using the *Google Cloud Platform, orchestrated using GKE.*
  `,
    images: [
      "/static/portfolio/lyra/mobile-splash.png",
      "/static/portfolio/lyra/mobile-login.png",
    ],
    companyUrl: "https://lyra-influence.com",
    tools: [
      "mongodb",
      "typescript",
      "nodejs",
      "docker",
      "kubernetes",
      "redis",
      "trello",
    ],
    slug: "lyra",
  },
  {
    title: "Acquire",
    image: "/static/acquire.png",
    slug: "acquire",
    date: "Mar '17",
    role: "Frontend Engineer",
    companyDescription:
      "Acquire helps you find the right products that match your taste",
    projectDescription: `
- Completely *responsive* Universal React/Redux Application
- Developed and delivered within 1 calendar week
- Optimized for enhanced SEO performance
- Offers product recommendations on the fly based on customer preferences
 `,
    images: [
      "/static/portfolio/acquire/mobile-advisor.png",
      "/static/portfolio/acquire/mobile-catalog.png",
      "/static/portfolio/acquire/desktop-landing.png",
    ],
    tools: ["react", "redux", "nodejs"],
  },
  {
    title: "Fundpundit",
    companyDescription:
      "Fundpundit serves as your first step to get funds and connects investors and banks to users.",
    image: "/static/fundpundit.png",
    role: "Lead Full Stack Engineer",
    projectDescription: `
- A MongoDB/GraphQL backed responsive React/Redux application
- Over *5 different roles and permissions* with complex *interlinked user flows*
- Unique *configurable algorithm* to calculate credit rating of users
- Generates a unique *one-page pdf* proposal for all applicants
- *Geolocation* to identify nearest branches
- A fully feature *administrative panel* which allows you configure every facet of the website
- Track a user's application through multiple steps, until it gets approved by the investors/banks
`,
    date: "Feb '17",
    images: [
      "/static/portfolio/fundpundit/mobile-profile.png",
      "/static/portfolio/fundpundit/tablet-loans.png",
      "/static/portfolio/fundpundit/desktop-landing.png",
    ],
    tools: ["react", "redux", "nodejs", "mongodb", "graphql", "trello"],
    slug: "fundpundit",
  },
  {
    title: "Brewfer",
    image: "/static/brewfer.png",
    role: "Lead Mobile Engineer",
    companyDescription:
      "Brewfer shows you the best offers brewing around you and helps you find the right food for your wallet",
    date: "Dec '15",
    projectDescription: `
- Hybrid mobile application for Android & iOS
- Developed a data management dashboard with an *ETL process*
- *Push notifications* for information on closest offers
- Intuitive *searching and filtering* capabilities
- User reviews and administrator approvals flows
- *Proximity based* offers
- Call, save or message to contact restaurants
`,
    images: [
      "/static/portfolio/brewfer/mobile-filters.png",
      "/static/portfolio/brewfer/mobile-restaraunts.png",
      "/static/portfolio/brewfer/desktop-landing.png",
    ],
    tools: ["laravel", "angularjs", "ionic", "mysql", "trello"],
    slug: "brewfer",
  },
  {
    title: "Prolite",
    image: "/static/prolite.png",
    date: "Jun '14",
    role: "Lead Mobile Engineer",
    companyDescription:
      "Marketing and outreach applications for multiple firms, as a part of Prolite Entertainment",
    projectDescription: `
- Designed and developed hybrid and Android native applications
- Created *marketing and consumer outreach* applications for improving brand visibility
- *Rapid development and iteration* based on client feedback
- Worked closely with clients to develop an *intuitive user experience*
`,
    images: [
      "/static/portfolio/prolite/mobile-guard-yourself-2.png",
      "/static/portfolio/prolite/mobile-guard-yourself-1.png",
      "/static/portfolio/prolite/mobile-guard-yourself-3.png",
      "/static/portfolio/prolite/mobile-rcity-2.png",
      "/static/portfolio/prolite/mobile-rcity-1.png",
      "/static/portfolio/prolite/mobile-rcity-3.png",
      "/static/portfolio/prolite/mobile-kotak-2.png",
      "/static/portfolio/prolite/mobile-kotak-1.png",
      "/static/portfolio/prolite/mobile-kotak-3.png",
    ],
    slug: "prolite",
    tools: ["android", "ionic", "mysql", "nodejs", "mongodb", "laravel"],
  },
  // {
  //   title: "Yuva Parivartan",
  //   image: "/static/yuva-parivartan.png",
  //   link: "/portfolio/yuva-parivartan",
  // },
  // {
  //   title: "Qrypt",
  //   image: "/static/qrypt.png",
  //   link: "/portfolio/qrypt",
  // },
  // {
  //   title: "Automator",
  //   image: "/static/automator.png",
  //   link: "/portfolio/automator",
  // },
];
