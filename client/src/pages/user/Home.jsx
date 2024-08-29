import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/style.css"
import banner1 from "../../photos/banner1 coruption.png"
import banner2 from "../../photos/new.png"
import banner3 from "../../photos/banner2.png"
import b1 from "../../photos/1.png"
import b2 from "../../photos/2.png"
import b3 from "../../photos/3.png"
import b4 from "../../photos/4.png"
import b5 from "../../photos/5.png"
import b6 from "../../photos/6.png"
import b7 from "../../photos/7.png"
import b8 from "../../photos/8.png"
import b9 from "../../photos/9.png"
import l from "../../photos/l.svg"
import r from "../../photos/r.svg"




const Home = () => {

  const [bannerIndex, setBannerIndex] = useState(0);
  const banners = [
    {
      image: b1,
      link: "/",
      text: 'Banner 1'
    },
    {
      image: b2,
      link: "/complaint-form",
      text: 'Banner 2'
    },
    {
      image: b3,
      link: '/dashboard/user-yojana-page',
      text: 'Banner 3'
    },
    {
      image: b4,
      link: '/dashboard/complaint-status',
      text: 'Banner 4'
    },
    {
      image: b5,
      link: '/map',
      text: 'Banner 5'
    },
    {
      image: b6,
      link: '/',
      text: 'Banner 6'
    },
    {
      image: b7,
      link: '/',
      text: 'Banner 7'
    },
    {
      image: b8,
      link: '/',
      text: 'Banner 8'
    },
    {
      image: b9,
      link: '/',
      text: 'Banner 9'
    },
  ];


  const handleNextBanner = () => {
    setBannerIndex((bannerIndex + 1) % banners.length);
  };

  const handlePrevBanner = () => {
    setBannerIndex((bannerIndex - 1 + banners.length) % banners.length);
  };


  
  return (
    
    <div>
      
      <div className="banner">
      <Link to={banners[bannerIndex].link}>
          <img src={banners[bannerIndex].image} alt={banners[bannerIndex].text} />
        </Link>
          <div className="banner-overlay">
          <img className="prev" src={l} alt='previous' onClick={handlePrevBanner}>
            
          </img>
          <img className="next" src={r} alt='next' onClick={handleNextBanner}>
            
          </img>
        </div>
      </div>
      <section className="first">
        <div className="container">
          <div className="left-side">
            <h2>COMPLAINT</h2>
            <p>
              The Anti-Corruption Board of India stands as a beacon of integrity
              in the nation's governance landscape. Charged with the vital
              mission of combating corruption at all levels, the board plays a
              pivotal role in fostering transparency, accountability, and
              ethical conduct across governmental and public sectors.
            </p>
            <Link to="/complaint-form"><button>COMPLAINT</button></Link>
          </div>
          <div className="right-side">
            <img
              src={banner1}
              alt="Corruption Banner"
            />
          </div>
        </div>
      </section>

      <div className="separation"></div>

      <section className="first">
        <div className="container">
          <div className="eft-side">
            <img
              src={banner2}
              alt="Funds Banner"
            />
          </div>
          <div className="left-side nd">
            <h2>FUNDS</h2>
            <p>
              Monitor the status of your fund directly within the website.
              Receive real-time updates and notifications on the progress of
              your applications and disbursement of funds.
            </p>
            <Link to="/dashboard/user-funds-page"><button>FUNDS</button></Link>          </div>
        </div>
      </section>

      <div className="separation"></div>

      <section className="first">
        <div className="container">
          <div className="left-side">
            <h2>YOJANA</h2>
            <p>
              Explore a wide range of government schemes categorized by sectors
              such as health, education, agriculture, housing, and more.
              Step-by-step guidance on how to apply for each Yojana, including
              links to online application portals and downloadable forms.
              Monitor the status of your Yojana applications directly within the
              website.
            </p>
            <Link to="/dashboard/user-yojana-page"><button>YOJANAS</button></Link>          </div>
          <div className="ight-side">
            <img
              src={banner3}
              alt="Yojana Banner"
            />
          </div>
        </div>
      </section>

      

      <section className="feq">
        <p>Frequently Asked Questions</p>
        <div className="feqbox">
          <span>What is corruption</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#000000"
            fill="white"
          >
            <path
              d="M12 4V20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="feqbox">
          <span>Use of these app?</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#000000"
            fill="white"
          >
            <path
              d="M12 4V20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="feqbox">
          <span>Where can I see funds?</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#000000"
            fill="white"
          >
            <path
              d="M12 4V20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="feqbox">
          <span>Sender information is private?</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#000000"
            fill="white"
          >
            <path
              d="M12 4V20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="feqbox">
          <span>How to send a complaint?</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#000000"
            fill="white"
          >
            <path
              d="M12 4V20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="feqbox">
          <span>Use of Map feature?</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#000000"
            fill="white"
          >
            <path
              d="M12 4V20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

    

      
    </div>
  );
};

export default Home;
