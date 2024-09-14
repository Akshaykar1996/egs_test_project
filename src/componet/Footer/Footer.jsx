import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_section">
          <div className="footer_image">
            <span className="imageline"></span>
            <img
              src="https://media1.thrillophilia.com/white-thrillo-logo.png?w=200&dpr=1.3"
              alt=""
            />
            <span className="imageline"></span>
          </div>
          <div className="footer_icon">
            <div className="box6">
              <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div className="box6">
              <i class="fa-brands fa-instagram"></i>
            </div>
            <div className="box6">
              <i class="fa-brands fa-twitter"></i>
            </div>
            <div className="box6">
              <i class="fa-brands fa-linkedin"></i>
            </div>
            <div className="box6">
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>

        <div className="copy_righr">
          <div>
            <h4>© 2024 Thrillophilia.com All rights reserved.</h4>
          </div>

          <div>
            <p>
              The content and images used on this site are copyright protected
              and copyrights vests with the respective owners. The usage of the
              content and images on this website is
            </p>
          </div>

          <div>
            <p>
              intended to promote the works and no endorsement of the artist
              shall be implied. Unauthorized use is prohibited and punishable by
              law.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
