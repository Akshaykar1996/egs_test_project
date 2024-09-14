import React from "react";
import "./Wright.css";

export const Wright = () => {
  let paragraph = [
    {
      title: "Seychelles Travel Guides",
      para: [
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
      ],
    },
    {
      title: "Seychelles Travel Guides",
      para: [
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
      ],
    },
    {
      title: "International Honeymoon Packages",
      para: [
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
      ],
    },
    {
      title: "Seychelles Travel Guides",
      para: [
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
        "50 Things to Do in Seychelles",
        "Honeymoon In Seychelles Travel Guide",
        "Seychelles in November",
      ],
    },
  ];
  return (
    <>
    {
      paragraph?.map((item)=>    <div className="wright container">
      <div className=" Travel">
        <h2>{item.title}</h2>
        <i className="fa-solid fa-angle-up"></i>
      </div>

      <div className="paragraph">
        {item.para?.map((para) => (
          <>
            <span>{para}</span> |{" "}
          </>
        ))}
      </div>
    </div>)
    }
   
    </>
  );
};
