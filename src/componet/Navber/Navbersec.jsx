import React from "react";
import "./Navbersec.css";
import { Selectted_cards } from "./Cards/Selectted_cards";
import a_logo from "../image/logos/1_logo.svg";
import b_logo from "../image/logos/2_logo.svg";
import c_logo from "../image/logos/3_logo.svg";
import d_logo from "../image/logos/4_logo.svg";
import e_logo from "../image/logos/5_logo.svg";
import f_logo from "../image/logos/6_logo.svg";
import g_logo from "../image/logos/7_logo.svg";

const Navbersec = () => {
  let logos = [
    { title: "Staffpicked", logo: a_logo },
    { title: "Honeymoon", logo: b_logo },
    { title: "Resorts", logo: c_logo },
    { title: "Private Tours", logo: d_logo },
    { title: "Luxury Tours", logo: e_logo },
    { title: "Family Tours", logo: f_logo },
    { title: "Group Tours", logo: g_logo },
  ];

  return (
    <div className="navber2 container">
      <div className="fiex">
        {logos.map((item) => (
          <Selectted_cards logo={item.logo} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Navbersec;
