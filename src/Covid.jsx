import React, { useEffect, useState } from "react";
import "./index.css";
// import { FaBeer } from 'react-icons/fa';
import { FaCircle, IconName } from "react-icons/fa";

const Covid = () => {
  const [data, setdata] = useState([]);

  const getcoviddata = async () => {
    try {
      const res = await fetch("https://api.track-covid19.in/reports_v2.json");
      const actualdata = await res.json();
      console.log(actualdata);
      setdata(actualdata);
    } catch (err) {
      console.log(err);
    }
    // fetch("https://api.track-covid19.in/reports_v2.json")
  };

  useEffect(() => {
    getcoviddata();
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="ive-cont">
          
          <h4 className="live-cont">
            <FaCircle style={{color:'red',width:'30px'}}/> 
            Live
          </h4>
          <h1 className="list-cont">COVID-19 TRACKER APP</h1>
        </div>
        <main className="main">
          <div className="div1 tag1">
            {" "}
            <p>
              <h3>
                our <span>Country </span>
              </h3>
            </p>
            <p className="my-ind">INDIA</p>
          </div>
          <div className="div1 tag2">
            <p>
              <h3>
                Total<span> Confirmed</span>
              </h3>
            </p>
            <p className="my-ind">{data.confirmed}</p>
          </div>
          <div className="div1 tag3">
            <p>
              <h3>
                Total <span>Recovered</span>
              </h3>
            </p>
            <p className="my-ind">{data.recovered}</p>
          </div>
          <div className="div1 tag4">
            <p>
              <h3>
                Total <span>Deaths</span>
              </h3>
            </p>
            <p className="my-ind">{data.dead}</p>
          </div>
          <div className="div1 tag5">
            {" "}
            <p>
              <h3>
                Total <span>active cases</span>
              </h3>
            </p>
            <p className="my-ind">{data.active}</p>
          </div>
          <div className="div1 tag6">
            {" "}
            <p>
              <h3>
                Last <span>Updated at</span>
              </h3>
            </p>
            <p className="my-ind">{data.updatedTime}</p>
          </div>
        </main>
      </div>
    </>
  );
};

export default Covid;
