import React from "react";
import Ajaypal from "../../public/assets/Team/Ajaypal.png";
import { Link } from "react-router-dom";
import Vineeth from "../../public/assets/Team/Sathya.png";
import Bunty from "../../public/assets/Team/Bunty.jpeg";
import Ag from "../../public/assets/Team/Akansha.jpeg";
import Supratik from "../../public/assets/Team/Supratik.jpg";
import Kauts from "../../public/assets/Team/Kauts.jpg";
import Shreyas from "../../public/assets/Team/Shreyas.png";
import Ketan from "../../public/assets/Team/Ketan.jpeg";
import Chiranjiv from "../../public/assets/Team/ChiranjivDview.jpg";
import Gourav from "../../public/assets/Team/Gourav.jpeg";
import ReactGA from "react-ga4";
import SEO from "../../Helmet/SEO";

const mentors = [
  {
    id: 1,
    name: "Ankit Bhati",
    designation: "Co-Founder Amnic",
    ex: "Ex- Co-Founder OLA",
    img: "https://media.licdn.com/dms/image/C5603AQEn0VxH5iVcYg/profile-displayphoto-shrink_800_800/0/1648089002942?e=1701907200&v=beta&t=tbRJhjolchdz2U2f0PrOeJo4nmfwsuvF1E-iBvwX8G0",
    link: "https://www.linkedin.com/in/ankitbhati/",
  },
  {
    id: 2,
    name: "Vineet Agarwal",
    designation: "Director at Moody's Analytics",
    ex: "Ex- CEO of SG Analytics",
    img: Vineeth,
    link: "https://www.linkedin.com/in/vineet-agarwal-10a5829/",
  },
  {
    id: 0,
    name: "Dr Chiranjiv Roy",
    designation: "VP of DS & Applied AI - Course5i",
    ex: "Ex- VP Data Science - Nissan Motor Corp. ",
    img: Chiranjiv,
    link: "https://www.linkedin.com/in/chiranjiv/",
  },
  {
    id: 4,
    name: "Shubhanga Prasad",
    designation: "Partner - Betaplus Capital",
    ex: "Ex-COO of OakNorth Bank",
    img: "https://media.licdn.com/dms/image/C4E03AQHayA3sWJMTng/profile-displayphoto-shrink_800_800/0/1657550496166?e=1701907200&v=beta&t=fWjeY8rrqTXtqjAcifNLK1mU3bPUNv_Z7oQpbOm5lao",
    link: "https://www.linkedin.com/in/shubhangaprasad/",
  },
  {
    id: 3,
    name: "Sathya Narayanan",
    designation: "Co-Founder Amnic",
    ex: "Ex-VP OLA Electric",
    img: "https://media.licdn.com/dms/image/D5603AQGw1sbiOfD2pA/profile-displayphoto-shrink_800_800/0/1666742313817?e=1701907200&v=beta&t=MwLozwYuyomhkvI83u1oRy_pUSAi6C1QLJt0t3CgVqA",
    link: "https://www.linkedin.com/in/sathyanagarajan/",
  },

  {
    id: 5,
    name: "Iat Chong Chan",
    designation: "ML/AI initiatives at OakNorth",
    ex: "Ex-ML scientist at Bloomberg",
    img: "https://media.licdn.com/dms/image/D4E03AQEpLcrBf0Q0tw/profile-displayphoto-shrink_800_800/0/1692376872626?e=1701907200&v=beta&t=LsxkS5gZAZ9qDsIcHi4J9XXPlksPZDNJ0MXcA5n2vAU",
    link: "https://www.linkedin.com/in/iatchongchan/",
  },
];

const team = [
  {
    id: 1,
    name: "Kauts Shukla",
    designation: "Co-Founder",
    img: Kauts,
    link: "https://www.linkedin.com/in/kauts-shukla/",
  },
  {
    id: 2,
    name: "Supratik Shankar",
    designation: "Co-Founder",
    img: Supratik,
    link: "https://www.linkedin.com/in/supratikshankar/",
  },
  {
    id: 3,
    name: "Surjodoy Ghosh",
    designation: "Director, Sales",
    img: "https://media.licdn.com/dms/image/C5103AQGLjK8m4f6KPA/profile-displayphoto-shrink_800_800/0/1517928751666?e=1701907200&v=beta&t=2EEKNyY9GKQDSOqITHoZ_rHOF4aDv8mPlgsAi3yu-G0",
    link: "https://www.linkedin.com/in/surjodoyghosh/",
  },
  {
    id: 4,
    name: "Bunty Kumar",
    designation: "Sr. Data Platform Engineer",
    img: Bunty,
    link: "https://www.linkedin.com/in/bunty-kumar-09221958/",
  },
  {
    id: 5,
    name: "Ajaypal Singh",
    designation: "Sr. Backend Engineer",
    img: Ajaypal,
    link: "https://www.linkedin.com/in/ajaypalsingh23/",
  },
  {
    id: 6,
    name: "Anubhav Johri",
    designation: "Sr. Full stack Engineer",
    img: "https://media.licdn.com/dms/image/C5603AQFd7hSL6QRLOA/profile-displayphoto-shrink_800_800/0/1648231900637?e=1701907200&v=beta&t=sdXOUgYRzYInHz6YAHk5z1sGftLQH0LfYlfxr_dXiXE",
    link: "https://www.linkedin.com/in/anubhav-johri-8065b06a/",
  },
  {
    id: 7,
    name: "Akansha Gupta",
    designation: "Marketing & Creative Analyst",
    img: Ag,
    link: "https://www.linkedin.com/in/akansha-gupta-216903160/",
  },
  {
    id: 8,
    name: "Shreyas",
    designation: "Sr. Data Platform Engineer",
    img: Shreyas,
    link: "https://www.linkedin.com/in/shreyas-b-9635a3123/",
  },
  {
    id: 9,
    name: "Miras Mujeeb",
    designation: "Front-end Engineer",
    img: "https://media.licdn.com/dms/image/C5603AQG8ff2s4keZhA/profile-displayphoto-shrink_800_800/0/1626280895242?e=1702512000&v=beta&t=jQdp1BMtiZ2CqYmSx_w-13Ei15_IC2zd4tZt0o3Df6I",
    link: "https://www.linkedin.com/in/miras98/",
  },
  {
    id: 10,
    name: "Gourav Goyal",
    designation: "Company Secretary",
    img: Gourav,
    link: "https://www.linkedin.com/in/gourav-goyal-b711a320b/",
  },

  {
    id: 11,
    name: "Ketan Joshi",
    designation: "Business Development",
    img: Ketan,
    link: "https://www.linkedin.com/in/ketanjoshi86/",
  },
];

const Team = () => {
  React.useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/team",
      title: "Team Page",
    });
  }, []);

  return (
    <div className="container-fluid p-0 m-0">
      <SEO  
        title="Team - Dview"
        description="At the heart of Dview's success are the individuals who shape its
        direction and drive its innovations. From the luminaries who guide
        our strategy to the dynamic team executing it, we're proud of the
        collective expertise and passion that positions Dview as a
        forerunner in data engineering."
        name="Team - Dview"
        type="website"
      />
      <div className="container mt10">
        <div className="row">
          <div className="col-12 col-md-10">
            <h1 className=" ch">Dview Family</h1>
            <p className="ch">
              At the heart of Dview's success are the individuals who shape its
              direction and drive its innovations. From the luminaries who guide
              our strategy to the dynamic team executing it, we're proud of the
              collective expertise and passion that positions Dview as a
              forerunner in data engineering.
            </p>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-12 col-md-8">
            <h2 className="ch">Guiding Lights: Advisors and Mentors</h2>
            <p className="ch">
              Our esteemed advisors and mentors are the compass guiding Dview's
              journey. With their deep industry knowledge and visionary
              foresight, they ensure Dview remains a leader in data engineering
              innovation and excellence.
            </p>
          </div>
        </div>
        <div className="row pt-md-5 advisors teamimg">
          {mentors.map((mentor) => {
            const { id, name, designation, ex, img, link } = mentor || {};
            return (
              <div className="col-12 col-sm-4 col-md-3 teamicon pe-2 pb-5"
                key={id}
              >
                <Link to={link} target="_blank">
                  <img src={img} alt="" />
                </Link>
                <h3 className="ch p-0 m-0 pt-3">{name}</h3>
                <ul>
                  <li>
                    <p className="ch pt-2 m-0">
                      <b>{designation}</b>
                    </p>
                  </li>
                  <li>
                    <p className="ch p-0 m-0">{ex}</p>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        <div className="row pt-2">
          <div className="col-12 col-md-8">
            <h2 className="ch">The Backbone: Our Team</h2>
            <p className="ch">
              Dview's strength lies in its dynamic team. Comprised of passionate
              experts, each member is committed to pushing the boundaries of
              data engineering. Together, we are redefining the way businesses
              interact with data.
            </p>
          </div>
        </div>

        <div className="row pt-md-5 team teamimg">
          {team.map((mentor) => {
            const { id, name, designation, ex, img, link } = mentor || {};
            return (
              <div className="col-12 col-md-3 teamicon pe-2 pb-5"
              key={id}
              >
                <Link to={link} target="_blank">
                  <img src={img} alt="" />
                </Link>
                <h3 className="ch p-0 m-0 pt-3">{name}</h3>
                <ul>
                  <li>
                    <p className="ch pt-2 m-0">
                      <b>{designation}</b>
                    </p>
                  </li>
                  <li>
                    <p className="ch p-0 m-0">{ex}</p>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
