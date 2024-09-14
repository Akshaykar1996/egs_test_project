import React from "react";
import { StaffCard } from "../Handpicked/cards/StaffCard";
import "./group.css";

let areas = [
  {
    title: "Honeymoon",
    children: [
      "https://media1.thrillophilia.com/filestore/6q28t4gycjolq0qgz2pmbecu3f15_shutterstock_2245375867.jpg?w=340&dpr=2",
      "https://media1.thrillophilia.com/filestore/6q28t4gycjolq0qgz2pmbecu3f15_shutterstock_2245375867.jpg?w=340&dpr=2",
      "https://media1.thrillophilia.com/filestore/mao0zf6f7a7lgpgquvuf42cdnnrq_Seychelles-Gallery.jpg?w=340&dpr=2",
    ],
  },
  {
    title: "Resorts",
    children: [
      "https://media1.thrillophilia.com/filestore/6q28t4gycjolq0qgz2pmbecu3f15_shutterstock_2245375867.jpg?w=340&dpr=2",
      "https://media1.thrillophilia.com/filestore/2coj77e74dm3l2qdj2mjevjb8ed2_50860934.jpg?w=340&dpr=2",
      "https://media1.thrillophilia.com/filestore/fsbt02o2ze1eia01hpwg57fxrrw5_268308287.jpg?w=340&dpr=2",
      "https://media1.thrillophilia.com/filestore/yu7rjzqdhoetgmrag7z5nqvsjgg9_33287963.webp?w=340&dpr=2",
      "https://media1.thrillophilia.com/filestore/yu7rjzqdhoetgmrag7z5nqvsjgg9_33287963.webp?w=340&dpr=2",
      "https://media1.thrillophilia.com/filestore/yu7rjzqdhoetgmrag7z5nqvsjgg9_33287963.webp?w=340&dpr=2",
    ],
  },
  {
    title: "Private Tours",
    children: [
      "https://media1.thrillophilia.com/filestore/qaj8voqujmhdahkhwtinslhsyfir_shutterstock_728310601.jpg?w=340&dpr=2",
      "https://media1.thrillophilia.com/filestore/6q28t4gycjolq0qgz2pmbecu3f15_shutterstock_2245375867.jpg?w=340&dpr=2",
      "https://media1.thrillophilia.com/filestore/mao0zf6f7a7lgpgquvuf42cdnnrq_Seychelles-Gallery.jpg?w=340&dpr=2",
    ],
  },
  {
    title: "Luxury Tours",
    children: [
      "https://media1.thrillophilia.com/filestore/t5690kr1q3z99suqopam9uziq1th_shutterstock_2142107531%20(1).jpg?w=340&dpr=2",
      "https://media1.thrillophilia.com/filestore/mao0zf6f7a7lgpgquvuf42cdnnrq_Seychelles-Gallery.jpg?w=340&dpr=2",
      "https://media1.thrillophilia.com/filestore/8t7flezeifhh9y70gf8qyr69erb2_shutterstock_463981970.jpg?w=340&dpr=2",
    ],
  },
  {
    title: "Family Tours",
    children: [
      "https://media1.thrillophilia.com/filestore/8t7flezeifhh9y70gf8qyr69erb2_shutterstock_463981970.jpg?w=340&dpr=2",
      "https://media1.thrillophilia.com/filestore/wsfwdizt3yoaq4n9om6ysby831fa_Arul%20Mihu%20Navasakthi%20Vinayagar%20Temple-1.jpg?w=340&dpr=2",
      "https://media1.thrillophilia.com/filestore/6q28t4gycjolq0qgz2pmbecu3f15_shutterstock_2245375867.jpg?w=340&dpr=2",
    ],
  },
  {
    title: "Group Tours",
    children: [
      "https://media1.thrillophilia.com/filestore/95vr2x96u8xamdva6f32t5xrkxaa_shutterstock_2153626099.jpg?w=340&dpr=1.0&q=70",
      "https://media1.thrillophilia.com/filestore/t5690kr1q3z99suqopam9uziq1th_shutterstock_2142107531%20(1).jpg?w=340&dpr=2",
      "https://media1.thrillophilia.com/filestore/mao0zf6f7a7lgpgquvuf42cdnnrq_Seychelles-Gallery.jpg?w=340&dpr=2",
      "https://media1.thrillophilia.com/filestore/6q28t4gycjolq0qgz2pmbecu3f15_shutterstock_2245375867.jpg?w=340&dpr=2",
      "https://media1.thrillophilia.com/filestore/wsfwdizt3yoaq4n9om6ysby831fa_Arul%20Mihu%20Navasakthi%20Vinayagar%20Temple-1.jpg?w=340&dpr=2",
      "https://media1.thrillophilia.com/filestore/8t7flezeifhh9y70gf8qyr69erb2_shutterstock_463981970.jpg?w=340&dpr=2",
    ],
  },
  {
    title: "More Seychelles Packages",
    children: [
      "https://media1.thrillophilia.com/filestore/95vr2x96u8xamdva6f32t5xrkxaa_shutterstock_2153626099.jpg?w=340&dpr=1.0&q=70",
      "https://media1.thrillophilia.com/filestore/t5690kr1q3z99suqopam9uziq1th_shutterstock_2142107531%20(1).jpg?w=340&dpr=2",
      "https://media1.thrillophilia.com/filestore/mao0zf6f7a7lgpgquvuf42cdnnrq_Seychelles-Gallery.jpg?w=340&dpr=2",
      "https://media1.thrillophilia.com/filestore/6q28t4gycjolq0qgz2pmbecu3f15_shutterstock_2245375867.jpg?w=340&dpr=2",
      "https://media1.thrillophilia.com/filestore/wsfwdizt3yoaq4n9om6ysby831fa_Arul%20Mihu%20Navasakthi%20Vinayagar%20Temple-1.jpg?w=340&dpr=2",
      "https://media1.thrillophilia.com/filestore/6q28t4gycjolq0qgz2pmbecu3f15_shutterstock_2245375867.jpg?w=340&dpr=2",
      "https://media1.thrillophilia.com/filestore/mao0zf6f7a7lgpgquvuf42cdnnrq_Seychelles-Gallery.jpg?w=340&dpr=2",
      "https://media1.thrillophilia.com/filestore/6q28t4gycjolq0qgz2pmbecu3f15_shutterstock_2245375867.jpg?w=340&dpr=2",
      "https://media1.thrillophilia.com/filestore/mao0zf6f7a7lgpgquvuf42cdnnrq_Seychelles-Gallery.jpg?w=340&dpr=2",
    ],
  },
];

export const Groups = () => {
  return (
    <>
      <div className="container">
        <div className="groupContainer">
          {areas.map((item) => (
            <div>
              <h2>{item.title}</h2>
              <div className="areas">
                {item.children?.map((images) => (
                  <StaffCard src={images} layout={true} />
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
};
