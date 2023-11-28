
"use client"
import React,{ createContext } from 'react'
import { useGetQuery } from "../../custom-hooks/customHooks";
import { CDM_SITE_ENDPOINT } from "../../API/endpoints";

import Noshow from "../../public/assets/Cards/Noshow.svg";
import Prioritize from "../../public/assets/Cards/Table 1.png";
import Disagreement from "../../public/assets/Cards/Data.svg";

// import Embark from "../assets/Cards/demo11.svg";
// import Effortless from "../assets/Cards/Demo/two.png";
// import Noshow from "../assets/Cards/Demo/three.png";
// import Prioritize from "../assets/Cards/Demo/four.png";
// import Disagreement from "../assets/Cards/Demo/five.png";

import Fibre from "../../public/assets/Cards/Fibre/Fibre1.svg";
import Main from "../../public/assets/Cards/Image.png";

const StateContext = createContext();
export default StateContext;

export const StateProvider = ({ children }) => {
  const [activeTag, setActiveTag] = React.useState("All");
  const [blogData, loading, error, fetchData] = useGetQuery();

  React.useEffect(() => {
    fetchData(`${CDM_SITE_ENDPOINT}/blogs`);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [openModal, setOpenModal] = React.useState(false);
  const [clicked, setClicked] = React.useState("0");


  const successStories = [
    {
      heading:
        "Dview revolutionized our Analytics! Spreadsheets to Dynamic Dashboards",
      para: "Transitioning from spreadsheets to real-time dashboards was a game-changer for us, leading to significant time savings and reduced cloud costs. Dview facilitated this seamless shift promptly, and their exceptional customer support further convinced us to opt for the upfront payment of the yearly fee.",
      img: './assets/Success/GearX.jpeg',
      name: "Madhu S Naidu",
      position: "Founder,\nGearX, US",
      percentage: "50%",
      ratetext: "Reduction in time from raw data to insights on a dashboard.",
    },
    {
      heading: "A One-Click Solution to Swift Decision Making",
      para: "In the past, we spent a day manually downloading and filtering Excel data from our database for crucial information. Now, with Dview platform, it's a one-click custom query engine and real-time analytics dashboards, making us more responsive to customers and proactive in addressing potential issues.",
      img: './assets/Success/Brittany.jpeg',
      name: "Brittany B.",
      position: "Key Account Manager, \nAH Group, US",
      percentage: "30%",
      ratetext:
        "Increase in Customer Response Time which led to increased C-SAT score",
    },
    {
      heading: "From Daunting Security Tasks to Secure and faster solutions",
      para: "We need robust encryption and decryption with granular access control of over 10 million records on a daily basis, for various analytical purposes. We always found it a daunting task, leading to bottlenecks, time lags and potential security risks. With DView’s platform, we could see it happen in just 20 seconds, with absolute security. It’s a gamechanger for organizations that are working in highly regulated environments.",
      img: './assets/Success/Nikunj.jpeg',
      name: "Nikunj Agarwal",
      position: "CTO,\nChqbook",
      percentage: "80%",
      ratetext: "Reduction in time to query encrypted sensitive data",
    },
    {
      heading: "Fast, Reliable Data Ingestion Transforms Our Workflow",
      para: "Dview’s platform has been a game-changer for us. It seamlessly facilitated the transfer of massive data from ScyllaDB to a centralized data lake, surpassing our expectations. It’s remarkably fast and reliable ingestion process outshined the performance of conventional open-source connectors. What’s truly commendable is their open architecture, which empowered us to swiftly deploy data products. Dview has undeniably helped us saving time, costs and enhancing reliability.",
      img: './assets/Success/Ajith.webp',
      name: "Ajith Prathap",
      position: "Engineering Manager, Threedots",
      percentage: "35%",
      ratetext:
        "Increase in ingestion speed, reduced data downtime and enabled faster deployment of data products",
    },
    {
      heading: "Dview: The Gold Standard for Scalable Analytics",
      para: "Dview effectively demonstrated deployment of data pipelines that scale across multiple clouds. Their platform has checkpointing, auto schema, and CDC which is significantly faster thus reducing data downtime without overloading primary databases. Their solution offers a higher refresh rate for a lower direct/indirect cost over our current pipeline SaaS. This positions them as the preferred solution for organizations seeking to scale their analytics.",
      img: './assets/Success/Swetha.jpeg',
      name: "Swetha T.",
      position: "CTO, Fanclash",
      percentage: "45%",
      ratetext:
        "Lower ingestion costs, efficient pipelines, and faster analytics.",
    },
  ];

  const Components = [
    {
      id: 0,
      img: './assets/Cards/1.svg',
      bigImg: Fibre,
      heading: "Embark on your data journey with FIBER",
      tags: [
        "Near Real-time",
        "No Code",
        "60% Efficient",
        "Encrypt PII",
        "Auto Schema",
      ],
      content:
        "Ingest data from 100+ sources in near real-time. Transform your data into analytics-ready format within minutes using our intuitive no-code UI. Enjoy zero downtime, unparalleled automation, and virtually zero maintenance. Streamline your data ingestion process.",
      link: "/fibre",
      classic: "fibreimgg",
    },
    {
      id: 1,
      img: './assets/Cards/Umm3.svg',
      bigImg: Main,
      heading:
        "Effortlessly centralise your data ",
      tags: ["Single-copy Architecture", "Normalized", "Compact", "Encrypted"],
      content:
        "Break free from data silos, and embrace the Lakehouse revolution to create a single source of truth. Our platform empowers lightning-fast analytical queries and ensures seamless interoperability across your data ecosystem.",
      link: "/data",
      classic: "data",
    },
    {
      id: 2,
      img: './assets/Cards/Noshow.svg',
      bigImg: Noshow,
      heading: "Query engine that autoscales",
      tags: [
        "Ad-hoc Query",
        "Sub-milli Second Latency",
        "Mask & Anonymize Column and Row Level data",
      ],
      content:
        "Secure your data through in-VPC deployment and AES 256 encryption of PII data. RBAC with data masking for robust access control and governance.",
      link: "/query",
      classic: "query",
    },
    {
      id: 3,
      img: './assets/Cards/Table 1.png',
      bigImg: Prioritize,
      heading:
        "Prioritise Data Security",
      tags: ["In VPC Deployment", "Access Control", "Encryption","Anonymization"],
      content:
        " Enhance data security with a dedicated VPC deployment tailored to your specific requirements. Implement RBAC control for team access and ensure data protection. Safeguard against data breaches by masking and anonymizing data.",
      link: "/security",
      classic: "security",
    },
    {
      id: 4,
      img: './assets/Cards/Data.svg',
      bigImg: Disagreement,
      heading: "Reduce data disagreement",
      tags: [
        "One-Source-One-Pipeline",
        "Ingestion Observability",
        "GitOps enabled",
      ],
      content:
        "  Collaborate with your team to build data pipelines seamlessly. Leverage the semantics layer to enhance data understanding for stakeholders and minimize redundant pipelines. Stay in control with the Gitops engine for version control, ensuring project progress from ideation to implementation. Achieve true collaboration and efficient data pipeline management with our platform.",
      link: "/disagreement",
      classic: "disagreement",
    },
  ];

  

  const pricingData = {
    plans: {
      saas: [
        {
          name: "Plan A",
          description: "For businesses just getting started",
          yearlyPrice: "Book a call",
          link: "https://calendly.com/dview/30min",
          features: {
            "Data Volume": ">1TB",
            "Data Sources": ">10",
            Users: ">30",
            "File Encryption & Decryption": true,
            "Query Data on Flight": false,
            "User Defined Functions": false,
            "Role Based Access Control": "Column & Row",
            "Contact Period": "3 years",
          },
        },
        {
          name: "Plan B",
          description: "For businesses with moderate data needs",
          yearlyPrice: "Book a call",
          link: "https://calendly.com/dview/30min",
          features: {
            "Data Volume": "5TB",
            "Data Sources": "15",
            Users: "100",
            "File Encryption & Decryption": true,
            "Query Data on Flight": true,
            "User Defined Functions": true,
            "Role Based Access Control": "Column & Row",
            "Contact Period": "3 years",
          },
        },
        {
          name: "Plan C",
          description: "For businesses with high data demands",
          yearlyPrice: "Book a call",
          link: "https://calendly.com/dview/30min",
          features: {
            "Data Volume": "10TB+",
            "Data Sources": "15+",
            Users: "100+",
            "File Encryption & Decryption": true,
            "Query Data on Flight": true,
            "User Defined Functions": true,
            "Role Based Access Control": "Column, Row & Cell",
            "Contact Period": "3 years",
          },
        },
      ],
      vpc: [
        {
          name: "Plan D",
          description: "For businesses just getting started",
          yearlyPrice: "Book a call",
          link: "https://calendly.com/dview/30min",
          features: {
            "Data Volume": ">1TB",
            "Data Sources": ">10",
            Users: ">30",
            "File Encryption & Decryption": true,
            "Query Data on Flight": false,
            "User Defined Functions": false,
            "Role Based Access Control": "Column & Row",
            "Contact Period": "3 years",
          },
        },
        {
          name: "Plan E",
          description: "For businesses with moderate data needs",
          yearlyPrice: "Book a call",
          link: "https://calendly.com/dview/30min",
          features: {
            "Data Volume": "5TB",
            "Data Sources": "15",
            Users: "100",
            "File Encryption & Decryption": true,
            "Query Data on Flight": true,
            "User Defined Functions": true,
            "Role Based Access Control": "Column & Row",
            "Contact Period": "3 years",
          },
        },
        {
          name: "Plan F",
          description: "For businesses with high data demands",
          yearlyPrice: "Book a call",
          link: "https://calendly.com/dview/30min",
          features: {
            "Data Volume": "10TB+",
            "Data Sources": "15+",
            Users: "100+",
            "File Encryption & Decryption": true,
            "Query Data on Flight": true,
            "User Defined Functions": true,
            "Role Based Access Control": "Column, Row & Cell",
            "Contact Period": "3 years",
          },
        },
      ],
    },
  };


  const [seoData, setSeoData] = React.useState({
    title: "",
    desicription: "",
    type: "",
    image: "",
    canonical: "",
  });

  const [footerData, setFooterData] = React.useState(false);

  const contextData = {
    activeTag,
    setActiveTag,
    blogData,
    openModal,
    setOpenModal,
    goToTop,
    successStories,
    Components,
    footerData,
    setFooterData,
    pricingData,
    clicked,
    setClicked,
    seoData,
    setSeoData,
    loading,
    error,
  };

  return (
    <StateContext.Provider value={contextData}>
      {children}
    </StateContext.Provider>
  );
};
