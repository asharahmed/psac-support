import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Head from "next/head";
import { FaSearch } from "react-icons/fa";
const strikeStartDate = new Date("2023-04-19");
   const today = new Date();
   const timeDiff = today.getTime() - strikeStartDate.getTime();
   const daysSinceStrikeBegan = Math.floor(timeDiff / (1000 * 3600 * 24));
    const hoursSinceStrikeBegan = Math.floor(timeDiff / (1000 * 3600));
    const remainingMinutesAfterHours = Math.floor(timeDiff / (1000 * 60)) % 60;
    
const DEMANDS = [
  {
    id: 1,
    title: "Fair wages",
    description:
      "According to PSAC, The Treasury Board’s insulting wage offer — averaging 2.06% per year from 2021–25 — is completely out of touch with the soaring cost of living across Canada and asks workers to take a big pay cut when they need a raise most.",
    url: "https://workerscantwait.ca/strike-faq/",
  },
  {
    id: 2,
    title: "Better benefits",
    description:
      "Workers want better benefits, such as improved health insurance and more paid time off.",
    url: "https://ottawacitizen.com/opinion/denley-psacs-strike-demands-arent-unreasonable-mr-trudeau",
  },
  {
    id: 3,
    title: "Safer working conditions",
    description:
      "Workers are demanding safer working conditions, including modern tooling, understanding of critical inclusivity issues, and more.",
    url: "https://psacunion.ca/health-and-safety-0",
  },
  {
    id: 4,
    title: "Remote work",
    description:
      "Workers are seeking remote work options, including the ability to work from home.",
    url: "https://globalnews.ca/news/9642634/psac-stike-remote-work/",
  },
  {
    id: 5,
    title: "A real commitment to fighting systemic racism in the workplace",
    description:
      "Workers are demanding a commitment to fighting systemic racism in the workplace.",
    url: "https://ottawacitizen.com/opinion/adam-racial-minorities-have-more-concerns-than-cash-as-psac-strikes",
  },
  {
    id: 6,
    title: "More jobs",
    description:
      "Workers are demanding more jobs for Canadians, including the creation of more full-time positions to support the growth of our economy.",
    url: "https://www.cbc.ca/news/canada/ottawa/psac-strike-ottawa-1.5994040",
  },
  {
    id: 7,
    title: "Better technology",
    description:
      "Workers, particularly subject matter experts, are calling for better technology, including the ability to work with modern tools to tackle Canada's modern threats.",
      url: "https://www.cbc.ca/news/canada/union-raises-chart-1.6813276",
  },
  {
    id: 8,
    title: "Respect for democracy at work",
    description: "Canada is one of the most democratic countries in the world. Canada's workforce is demanding respect for democracy in the workplace.",
    url: "https://freedomhouse.org/country/canada",
  },
  {
    id: 9,
    title: "Find a picket line near you",
    description:
      "Commit to joining a picket line near you!",
    url: "https://workerscantwait.ca/picket-lines/",
  },
  {
    id: 10,
    title: "Support the strike",
    description:
      "Support the strike by making your voice heard or read the letter!",
    url: "https://web.cs.dal.ca/~ashar/psac.pdf",
  },
  {
    id: 11,
    title: "Watch the PSAC PSA",
    description:
      "Watch the PSAC PSA on how workers cannot wait. None of us can.",
    url: "https://www.youtube.com/watch?v=TGjfPySSjdE",

  },
  {
    id: 12,
    title: "A project by a proud union member",
    description:
    "This web application is not affiliated with PSAC, but is a project by a proud union member (Ashar Ahmed).",
    url: "https://linkedin.com/in/asharsahmed",


  },

];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDemands = DEMANDS.filter((demand) =>
    demand.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

   // Calculate the time since the strike began
   
   

  return (
    <div className="container">
      <Head>
        
          <title>PSAC Workers Strike</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="shortcut icon" type="image/png" href="/favicon.png" />
         
         
        <meta
          name="description"
          content="Learn about the demands of striking Public Service Alliance of Canada workers."
        />
        <meta property="og:title" content="PSAC Workers Strike" />
        <meta property="og:description" content="Learn about the demands of striking Public Service Alliance of Canada workers." />
        <meta property="og:url" content="https://supportpsac.com/" />
        <meta property="og:image" content="/favicon.png" />

         <style>{`
          

          .title {
            color: white;
          }

  `}</style>
      </Head>
      <header>
        <div className="flag">
          <div className="wrapper">
            <div className="logo">
              <svg
                width="50"
                height="50"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0H100V100H0V0Z" fill="#C8102E" />
                <path d="M10 10H90V90H10V10Z" fill="#FFFFFF" />
                <rect x="10" y="25" width="80" height="10" fill="#C8102E" />
                <rect x="10" y="45" width="80" height="10" fill="#FFFFFF" />
                <rect x="10" y="65" width="80" height="10" fill="#C8102E" />
              </svg>
              <h1>PSAC Workers Strike</h1>
            </div>
            <div className="search">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search for a demand..."
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
                <FiSearch />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="wrapper">
          <ul className="demands">
            {filteredDemands.map((demand) => (
              <li key={demand.id} onMouseEnter={(event) => event.target.classList.add("hover")} onMouseLeave={(event) => event.target.classList.remove("hover")}>
                <a href={demand.url} target="_blank" rel="noopener noreferrer">
                  <h2>{demand.title}</h2>
                  <p>{demand.description}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="video-container">
        <iframe   className="video" width="790vw" height="450vh" src="https://www.youtube.com/embed/TGjfPySSjdE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
</div>



<div className="days-since">
  <br/>
  <h2>It has been {hoursSinceStrikeBegan} hours or {daysSinceStrikeBegan} days since the strike began.</h2><br/> 
</div>


        <footer>
        <div className="wrapper">
          <p className="footer-wrap">
            <a href="https://www.psacunion.ca/" target="_blank" rel="noopener noreferrer">
            🚩 PSAC is the largest union in Canada&apos;s public service, representing 200,000 members across the country. 
              <br/>
              This web application is not affiliated with PSAC and is a project made in solidarity by a proud union member and friend of PSAC.
            </a>
            
          </p>
          <p>
            
          </p>
        </div>
      </footer>
      </main>
      
      <style jsx>{`
       @import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap");
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          font-family: Noto Sans, sans-serif;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #FFFFFF;

        }



        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .flag {
          background-color: #c8102e;
          padding: 1rem 0;
        }

        .wrapper {

          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
        }

        .logo svg {
          margin-right: 1rem;
        }

        .logo h1 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
        }

        .title {
          color: white;
        }

        Head {
          color: white;
        }

        .search {
          display: flex;
          align-items: center;
        }

        .search-container {
          position: relative;
          display: flex;
          align-items: center;
          background-color: #fff;
          border-radius: 4px;
          padding: 0.5rem;
        }

        .search-container input {
          border: none;
          outline: none;
          font-size: 1rem;
          padding: 0.5rem;
        } 

        .search-container svg {
          position: absolute;
          right: 0.5rem;
        }

        .demands {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 1rem;
        }

        .demands li {
          padding: 1.5rem;
          border-radius: 0.5rem;
          margin: 1rem 0;
          background-color: #f7f7f7;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: background-color 0.2s ease-in-out;
        }
        
        .demands li:hover {
          background-color: #c8102e;
          color: white;
          transition: background-color 0.2s ease-in-out;
        }
        
        .demands li.hover {
          animation: shake 0.5s ease-in-out;
          animation-iteration-count: 1;
        }
        
        @keyframes shake {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(0.5rem, 0);
          }
          50% {
            transform: translate(0, 0);
          }
          75% {
            transform: translate(-0.5rem, 0);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        .demands li a {
          color: #000;
        }

        .demands li a:hover {
          text-decoration: underline;
        }

        .demands li h2 {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0;
        }

        .demands li p {
          margin: 0;
        }

        @media (max-width: 600px) {
          .logo h1 {
            font-size: 1.25rem;
          }
        }

        @media (max-width: 500px) {
          .logo h1 {
            font-size: 1rem;
          }
        }

        @media (max-width: 400px) {
          .logo h1 {
            font-size: 0.75rem;
          }
        }

        @media (max-width: 300px) {
          .logo h1 {
            font-size: 0.5rem;
          }
        }

        @media (max-width: 600px) {
          .search-container {
            display: none;
          }
        }

        @media (max-width: 500px) {
          .demands {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }
        }

        @media (max-width: 400px) {
          .demands {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
        }

        @media (max-width: 300px) {
          .demands {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          }
        }

        

        .footer-wrap {
          line-height: 1.25rem;
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.75rem;
          color: black;
        }

        .dark-mode .footer-wrap {
          color: white;
        }

        .footer-wrap a {
          color: inherit;
          text-decoration: none;
        }

        .footer-wrap a:hover {
          text-decoration: underline;
        }
        iframe {
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
          border: 5px solid white;
        }

        .days-since {
          font-size: 0.75rem;
          color: #666;
          padding: 2rem 0;


        }
        




        

      `}</style>
      </div>
    );
  }
